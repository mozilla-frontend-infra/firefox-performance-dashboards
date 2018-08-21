// eslint-disable-next-line
import 'isomorphic-fetch';
// eslint-disable-next-line
import isEqual from 'lodash.isequal';
import { stringify } from 'query-string';

export const TREEHERDER = 'https://treeherder.mozilla.org';
const PROJECT = 'mozilla-central';
const DEFAULT_TIMERANGE = 14 * 24 * 3600;

export const signaturesUrl = (project = PROJECT) => (
  `${TREEHERDER}/api/project/${project}/performance/signatures/`
);

export const dataPointsEndpointUrl = (project = PROJECT) => (
  `${TREEHERDER}/api/project/${project}/performance/data/`
);

export const perfDataUrls =
  (frameworkId, signatureIds, project = PROJECT, interval = DEFAULT_TIMERANGE) => {
    const url = dataPointsEndpointUrl(project);
    const baseParams = stringify({
      framework: frameworkId,
      interval,
    });
    const urls = [];
    for (let i = 0; i < (signatureIds.length) / 100; i += 1) {
      const signaturesParams = stringify({
        signature_id: signatureIds.slice(i * 100, ((i + 1) * 100)),
      });
      urls.push(`${url}?${baseParams}&${signaturesParams}`);
    }
    return urls;
  };

// The data contains an object where each key represents a subtest
// Each data point of that subtest takes the form of:
// {job_id: 162620134, signature_id: 1659462, id: 414057864, push_id: 306862, value: 54.89 }
const fetchPerfData = async (frameworkId, signatureIds) => {
  const dataPoints = {};
  await Promise.all(perfDataUrls(frameworkId, signatureIds)
    .map(async (url) => {
      const data = await (await fetch(url)).json();
      Object.keys(data).forEach((hash) => {
        if (!dataPoints[hash]) {
          dataPoints[hash] = data[hash];
        } else {
          dataPoints[hash].concat(data[hash]);
        }
      });
    }));
  return dataPoints;
};

const perherderGraphUrl =
  (frameworkId, signatureIds, platform, project = PROJECT, timerange = DEFAULT_TIMERANGE) => {
    let baseDataUrl = `${TREEHERDER}/perf.html#/graphs?timerange=${timerange}`;
    baseDataUrl += `&${signatureIds.sort().map(id => `series=${project},${id},1,${frameworkId}`).join('&')}`;
    return baseDataUrl;
  };

const queryAllTreeherderOptions = async () => {
  const response = await fetch(`${TREEHERDER}/api/optioncollectionhash/`);
  return response.json();
};

const transformOptionCollectionHash = (optionCollectionHash) => {
  const options = {};
  optionCollectionHash.forEach((optionCollection) => {
    // What optionCollection looks like:
    // {"options":[{"name":"debug"},{"name":"memleak"}],
    //  "option_collection_hash":"531e7f974f8dab5d4d8dfe344a0219a5b1184d20"},
    // and we wanted "options" to look like this instead:
    // "options":["debug", "memleak"]
    options[optionCollection.option_collection_hash] =
      optionCollection.options.map(keys => keys.name);
  });
  return options;
};

const treeherderOptions = async () => {
  const optionCollectionHash = await queryAllTreeherderOptions();
  return transformOptionCollectionHash(optionCollectionHash);
};

const queryPlatformSignaturesNoSubtests = async (frameworkId, platform) => {
  const response = await fetch(`${signaturesUrl()}?framework=${frameworkId}&platform=${platform}&subtests=0`);
  return response.json();
};

const querySubtestsAssociatedToParent = async (parentHash) => {
  const response = await fetch(`${signaturesUrl()}?parent_signature=${parentHash}`);
  return response.json();
};

const signaturesForPlatformSuite = async (frameworkId, platform, suite) => {
  const allPlatformSignatures = await queryPlatformSignaturesNoSubtests(frameworkId, platform);
  const filteredSignatures = Object.keys(allPlatformSignatures)
    .reduce((res, signatureHash) => {
      const jobSignature = allPlatformSignatures[signatureHash];
      if (jobSignature.suite !== suite) {
        return res;
      }
      res[signatureHash] = {
        parentSignatureHash: signatureHash,
        ...jobSignature,
      };
      return res;
    }, {});
  return filteredSignatures;
};

const findParentSignatureInfo = (
  signatures,
  options,
  option = 'pgo',
  extraOptions,
) => {
  const result = [];
  Object.keys(signatures).forEach((hash) => {
    const signature = signatures[hash];
    const optionCollection = options[signature.option_collection_hash];
    if (optionCollection && optionCollection.includes(option)) {
      if (extraOptions && extraOptions.length > 0) {
        if (isEqual(signature.extra_options, extraOptions)) {
          result.push(signature);
        }
      } else {
        result.push(signature);
      }
    }
  });

  if (result.length !== 1) {
    return undefined;
  }

  return result[0];
};

export const parentSignatureInfo = async (frameworkId, platform, suite, option, extraOptions) => {
  const [signatures, options] = await Promise.all([
    signaturesForPlatformSuite(frameworkId, platform, suite, option),
    treeherderOptions(),
  ]);
  return findParentSignatureInfo(signatures, options, option, extraOptions);
};

const prepareData = async (frameworkId, subtestsInfo) => {
  const signatureIds = Object.values(subtestsInfo).map(v => v.id);
  const data = {
    // Link to Perfherder with all subtests
    perfherderUrl: perherderGraphUrl(frameworkId, signatureIds),
    data: {},
  };
  const dataPoints = await fetchPerfData(frameworkId, signatureIds);

  Object.keys(dataPoints).forEach((subtestHash) => {
    data.data[subtestHash] = {
      meta: {
        url: perherderGraphUrl(frameworkId, [subtestHash]),
        ...subtestsInfo[subtestHash], // Original object from Perfherder
      },
      data: dataPoints[subtestHash].map(datum => ({
        ...datum,
        datetime: new Date(datum.push_timestamp * 1000),
      })),
    };
  });

  return data;
};

export const subbenchmarksData = async (frameworkId, platform, suite, option, extraOptions) => {
  const parentInfo = await parentSignatureInfo(frameworkId, platform, suite, option, extraOptions);
  if (!parentInfo) {
    return {};
  }
  const subtests = await querySubtestsAssociatedToParent(parentInfo.parentSignatureHash);
  return prepareData(frameworkId, subtests);
};

export const fetchBenchmarkData = async (frameworkId, platform, suite, option, extraOptions) => {
  const parentInfo = await parentSignatureInfo(frameworkId, platform, suite, option, extraOptions);
  if (!parentInfo) {
    return {};
  }
  const perfherderUrl = perherderGraphUrl(frameworkId, [parentInfo.id], platform);
  // Each data point takes the form of:
  // {job_id: 162620134, signature_id: 1659462, id: 414057864, push_id: 306862, value: 54.89 }
  const dataPoints = await (
    await fetch(perfDataUrls(frameworkId, [parentInfo.id])[0])).json();
  // This data structure is to resemble the one used by subbenchmarks
  return {
    data: {
      [parentInfo.parentSignatureHash]: {
        data: dataPoints[parentInfo.parentSignatureHash].map(datum => ({
          datetime: new Date(datum.push_timestamp * 1000),
          ...datum,
        })),
        meta: {
          url: perfherderUrl,
          ...parentInfo,
        },
      },
    },
    perfherderUrl,
  };
};
