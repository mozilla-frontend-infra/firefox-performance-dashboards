import isEqual from 'lodash.isequal';
import { stringify } from 'query-string';
import fetchAndCache from './fetchAndCache';

export const TREEHERDER = 'https://treeherder.mozilla.org';
const PROJECT = 'mozilla-central';
const DEFAULT_TIMERANGE = 14 * 24 * 3600;

export const signaturesUrl = (project = PROJECT) => (
  `${TREEHERDER}/api/project/${project}/performance/signatures/`
);

const dataPointsEndpointUrl = (project = PROJECT) => (
  `${TREEHERDER}/api/project/${project}/performance/data/`
);

const platformSuitesUrl = ({ frameworkId, platform, project }) => (
  `${signaturesUrl(project)}?framework=${frameworkId}&platform=${platform}&subtests=0`
);

export const perfDataUrls = ({ frameworkId, project }, signatureIds, timeRange) => {
  const url = dataPointsEndpointUrl(project);
  const baseParams = stringify({
    framework: frameworkId,
    interval: timeRange,
  });
    // To guarantee order for tests
  signatureIds.sort();
  const urls = [];
  for (let i = 0; i < (signatureIds.length) / 100; i += 1) {
    const signaturesParams = stringify({
      signature_id: signatureIds.slice(i * 100, ((i + 1) * 100)),
    });
    urls.push(`${url}?${baseParams}&${signaturesParams}`);
  }
  return urls;
};

const tranformData = (data) => data.map((datum) => ({
  datetime: new Date(datum.push_timestamp * 1000),
  ...datum,
}));

// The data contains an object where each key represents a subtest
// Each data point of that subtest takes the form of:
// {job_id: 162620134, signature_id: 1659462, id: 414057864, push_id: 306862, value: 54.89 }
const fetchPerfData = async (seriesConfig, signatureIds, timeRange) => {
  const dataPoints = {};
  await Promise.all(perfDataUrls(seriesConfig, signatureIds, timeRange)
    .map(async (url) => {
      const data = await (await fetchAndCache(url)).json();
      Object.keys(data).forEach((hash) => {
        if (!dataPoints[hash]) {
          dataPoints[hash] = [];
        }
        dataPoints[hash] = dataPoints[hash].concat(tranformData(data[hash]));
      });
    }));
  return dataPoints;
};

const perfherderGraphUrl = (
  { project = PROJECT, frameworkId },
  signatureIds,
  timeRange = DEFAULT_TIMERANGE,
) => {
  const hash = '#';
  // We are escaping the hash sign  because it messes up with Chrome's DevTools code unpacking
  let baseDataUrl = `${TREEHERDER}/perf.html${hash}/graphs?timerange=${timeRange}`;
  baseDataUrl += `&${signatureIds.sort().map((id) => `series=${project},${id},1,${frameworkId}`).join('&')}`;
  return baseDataUrl;
};

const queryAllTreeherderOptions = async () => {
  const response = await fetchAndCache(`${TREEHERDER}/api/optioncollectionhash/`);
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
    options[optionCollection.option_collection_hash] = optionCollection.options.map(
      (keys) => keys.name,
    );
  });
  return options;
};

const treeherderOptions = async () => {
  const optionCollectionHash = await queryAllTreeherderOptions();
  return transformOptionCollectionHash(optionCollectionHash);
};

const queryPlatformSignatures = async (seriesConfig) => {
  const response = await fetchAndCache(platformSuitesUrl(seriesConfig));
  return response.json();
};

const querySubtests = async ({ project }, parentHash) => {
  const response = await fetchAndCache(`${signaturesUrl(project)}?parent_signature=${parentHash}`);
  return response.json();
};

const remapResponse = (response) => {
  const remappedResponse = {};
  Object.keys(response).forEach(
    ((key) => {
      const value = response[key];
      remappedResponse[value.signature_hash] = value;
    }
    ),
  );
  return remappedResponse;
};

const signaturesForPlatformSuite = async (seriesConfig) => {
  const allPlatformSignatures = await queryPlatformSignatures(seriesConfig);
  const filteredSignatures = Object.keys(allPlatformSignatures)
    .reduce((res, signatureId) => {
      const jobSignature = allPlatformSignatures[signatureId];
      if (
        jobSignature.suite === seriesConfig.suite
        && ((jobSignature.suite !== jobSignature.test && jobSignature.test === seriesConfig.test)
        || (jobSignature.suite === jobSignature.test))
      ) {
        res[signatureId] = {
          parentSignatureHash: jobSignature.signature_hash,
          ...jobSignature,
        };
      }
      return res;
    }, {});
  return filteredSignatures;
};

const findParentSignatureInfo = ({ option = 'pgo', application, extraOptions }, signatures, options) => {
  const result = [];
  // Each signature is a potential candidate
  Object.keys(signatures).forEach((hash) => {
    const signature = signatures[hash];
    const optionCollection = options[signature.option_collection_hash];
    if (optionCollection && optionCollection.includes(option)) {
      if (!application || (
        signature.application && application && isEqual(signature.application, application))) {
        if (!signature.extra_options && !extraOptions) {
          result.push(signature);
        } else if (
          signature.extra_options && extraOptions
          && isEqual(signature.extra_options, extraOptions)
        ) {
          result.push(signature);
        }
      }
    }
  });
  if (result.length !== 1) {
    return undefined;
  }

  return result[0];
};

const parentSignatureInfo = async (seriesConfig) => {
  const [signatures, options] = await Promise.all([
    signaturesForPlatformSuite(seriesConfig),
    treeherderOptions(seriesConfig.project),
  ]);
  return findParentSignatureInfo(seriesConfig, signatures, options);
};

const fetchSubtestsData = async (seriesConfig, subtestsInfo, timeRange) => {
  const signatureIds = Object.values(subtestsInfo).map((v) => v.id);
  const subtestsData = {};
  const dataPoints = await fetchPerfData(seriesConfig, signatureIds, timeRange);

  Object.keys(dataPoints).forEach((subtestHash) => {
    subtestsData[subtestHash] = {
      data: dataPoints[subtestHash],
      meta: subtestsInfo[subtestHash], // Original object from Perfherder
      perfherderUrl: perfherderGraphUrl(seriesConfig, [subtestHash]),
    };
  });

  return subtestsData;
};

export const queryPerformanceData = async (
  seriesConfig,
  options,
) => {
  const { includeSubtests = false, timeRange = DEFAULT_TIMERANGE } = options;
  const parentInfo = await parentSignatureInfo(seriesConfig);
  // XXX: Throw error instead
  if (!parentInfo) {
    return {};
  }
  let perfData = {};
  if (!(includeSubtests && parentInfo.has_subtests)) {
    const dataPoints = await fetchPerfData(seriesConfig, [parentInfo.id], timeRange);
    perfData = {
      [parentInfo.parentSignatureHash]: {
        data: dataPoints[parentInfo.parentSignatureHash],
        meta: parentInfo,
        perfherderUrl: perfherderGraphUrl(seriesConfig, [parentInfo.id]),
      },
    };
  } else {
    const subtestsMeta = await querySubtests(seriesConfig, parentInfo.parentSignatureHash);
    const remappedSubtestsMeta = remapResponse(subtestsMeta);
    remappedSubtestsMeta[parentInfo.parentSignatureHash] = parentInfo;
    const subtestsData = await fetchSubtestsData(seriesConfig, remappedSubtestsMeta, timeRange);
    Object.keys(subtestsData).forEach((hash) => { perfData[hash] = subtestsData[hash]; });
  }

  return perfData;
};

export default queryPerformanceData;
