/* global describe it */
import fetchMock from 'fetch-mock';
import {
  perfDataUrls,
  signaturesUrl,
  queryPerformanceData,
  TREEHERDER,
} from '../src/utils/perfherder';
import MAC_STYLEBENCH_SIGNATURES from './mocks/mac/StyleBench/signatures';
import MAC_STYLEBENCH_URLS from './mocks/mac/StyleBench/urls';

const assert = require('assert');
const LINUX64_SIGNATURES = require('./mocks/linux64/signaturesNoSubtests');
const LINUX64_JETSTREAM_DATA = require('./mocks/linux64/JetStream/data');
const LINUX64_JETSTREAM_SUBTESTS = require('./mocks/linux64/JetStream/subtests');
const LINUX64_JETSTREAM_EXPECTED_DATA = require('./mocks/linux64/JetStream/expected');
const WIN7_SIGNATURES = require('./mocks/win7/signaturesNoSubtests');
const WIN7_MMA_DATA = require('./mocks/win7/MotionMarkAnimometer/data');
const WIN7_MMA_EXPECTED_DATA = require('./mocks/win7/MotionMarkAnimometer/expected');
const WIN10_RAPTOR_SIGNATURES = require('./mocks/win10/raptorSignaturesNoSubtests');
const WIN10_TALOS_SIGNATURES = require('./mocks/win10/talosSignaturesNoSubtests');
const WIN10_MMA_SUBTESTS = require('./mocks/win10/MotionMarkAnimometer/subtests');
const WIN10_MMA_DATA = require('./mocks/win10/MotionMarkAnimometer/data');
const WIN10_MMA_EXPECTED_DATA = require('./mocks/win10/MotionMarkAnimometer/expected');
const WIN10_TP5O_DATA = require('./mocks/win10/Tp5o/data');
const WIN10_TP5O_EXPECTED_DATA = require('./mocks/win10/Tp5o/expected');
const WIN10_SESSION_RESTORE_DATA = require('./mocks/win10/SessionRestore/data');
const WIN10_SESSION_RESTORE_EXPECTED_DATA = require('./mocks/win10/SessionRestore/expected');
const OPTION_COLLECTION_HASHES = require('./mocks/optionCollectionHash');

const PROJECT = 'mozilla-central';
const TIMERANGE = 3 * 24 * 3600;

const downcastDatetimesToStrings = (data) => {
  const newData = Object.assign({}, data);
  Object.keys(newData).forEach((node) => {
    newData[node].data.forEach((datum, index) => {
      newData[node].data[index].datetime = new Date(datum.push_timestamp * 1000);
    });
  });
  return newData;
};

fetchMock.get(`${TREEHERDER}/api/optioncollectionhash/`, OPTION_COLLECTION_HASHES);

describe('Talos', () => {
  const TALOS_CONFIG = {
    extraOptions: ['e10s', 'stylo'],
    frameworkId: 1,
    option: 'pgo',
    project: PROJECT,
  };

  describe('Linux64', () => {
    const seriesConfig = {
      platform: 'linux64',
      ...TALOS_CONFIG,
    };
    const { frameworkId, platform, project } = seriesConfig;
    fetchMock.get(
      `${signaturesUrl(project)}?framework=${frameworkId}&platform=${platform}&subtests=0`,
      LINUX64_SIGNATURES,
    );
    describe('Jetstream (with subtests)', () => {
      seriesConfig.suite = 'JetStream';
      const signatureIds = [
        1661254, // The parental signature
        1661255, 1661256, 1661257, 1661258, 1661259, 1661260, 1661261, 1661262, 1661263, 1661264,
        1661265, 1661266, 1661267, 1661268, 1661269, 1661270, 1661271, 1661272, 1661273, 1661274,
        1661275, 1661276, 1661277, 1661278, 1661279, 1661280, 1661281, 1661282, 1661283, 1661284,
        1661285, 1661286, 1661287, 1661288, 1661289, 1661290, 1661291, 1661292, 1661293, 1661294,
      ];
      const parentSignatureHash = '46ca6eb015193051661117a30bd39e6f25ee4744';

      fetchMock.get(
        `${signaturesUrl(project)}?parent_signature=${parentSignatureHash}`,
        LINUX64_JETSTREAM_SUBTESTS,
      );

      fetchMock.get(
        perfDataUrls(seriesConfig, signatureIds, TIMERANGE)[0],
        LINUX64_JETSTREAM_DATA,
      );

      it('should find Linux64 JetStream pgo subtests data', async () => {
        const data = await queryPerformanceData(
          seriesConfig,
          { includeSubtests: true, timeRange: TIMERANGE },
        );
        const modifiedExpectedData = downcastDatetimesToStrings(LINUX64_JETSTREAM_EXPECTED_DATA);
        assert.deepEqual(data, modifiedExpectedData);
      });
    });
  });
  describe('Windows 10', () => {
    const seriesConfig = {
      platform: 'windows10-64',
      ...TALOS_CONFIG,
    };
    const { frameworkId, platform, project } = seriesConfig;
    fetchMock.get(
      `${signaturesUrl(project)}?framework=${frameworkId}&platform=${platform}&subtests=0`,
      WIN10_TALOS_SIGNATURES,
    );
    // The tp5o benchmark has an oddity where we have two versions; both
    // of them have the same suite property, however, one of them does not have
    // the test property. This could be some data polution on Perfherder
    it('should find Windows 10 Tp5o pgo data (no subtests)', async () => {
      seriesConfig.suite = 'tp5o';
      fetchMock.get(
        perfDataUrls(seriesConfig, [1538597], TIMERANGE)[0],
        WIN10_TP5O_DATA,
      );

      const data = await queryPerformanceData(seriesConfig, { timeRange: TIMERANGE });
      const modifiedExpectedData = downcastDatetimesToStrings(WIN10_TP5O_EXPECTED_DATA);
      assert.deepEqual(data, modifiedExpectedData);
    });
    // The session restore benchmarks have an oddity where the test property
    // matches the suite property. This could be some data polution on Perfherder
    it('should find Windows 10 Session Restore pgo data', async () => {
      seriesConfig.suite = 'sessionrestore';
      fetchMock.get(
        perfDataUrls(seriesConfig, [1538534], TIMERANGE)[0],
        WIN10_SESSION_RESTORE_DATA,
      );
      const data = await queryPerformanceData(seriesConfig, { timeRange: TIMERANGE });
      const modifiedExpectedData = downcastDatetimesToStrings(WIN10_SESSION_RESTORE_EXPECTED_DATA);
      assert.deepEqual(data, modifiedExpectedData);
    });
  });
});

describe('Raptor', () => {
  describe('Windows 10', () => {
    const seriesConfig = {
      frameworkId: 10,
      option: 'pgo',
      project: PROJECT,
      platform: 'windows10-64',
    };
    const { frameworkId, platform, project } = seriesConfig;
    fetchMock.get(`${signaturesUrl(project)}?framework=${frameworkId}&platform=${platform}&subtests=0`, WIN10_RAPTOR_SIGNATURES);

    describe('MotionMarkAnimometer', () => {
      seriesConfig.suite = 'raptor-motionmark-animometer-firefox';
      // 1708519 is the parental signature
      const signatureIds = [
        1708519, 1708520, 1708521, 1708522, 1708523, 1708524, 1708525, 1708526, 1708527, 1708528,
      ];
      const parentHash = '9ad671fb568a5b3027af35b5d42fc6dd385f25ed';

      fetchMock.get(`${signaturesUrl(project)}?parent_signature=${parentHash}`, WIN10_MMA_SUBTESTS);
      fetchMock.get(perfDataUrls(seriesConfig, signatureIds, TIMERANGE)[0], WIN10_MMA_DATA);

      it('should find Windows 10 MotionMarkAnimometer pgo subtests data', async () => {
        const data = await queryPerformanceData(
          seriesConfig,
          { includeSubtests: true, timeRange: TIMERANGE },
        );
        const modifiedExpectedData = downcastDatetimesToStrings(WIN10_MMA_EXPECTED_DATA);
        assert.deepEqual(data, modifiedExpectedData);
      });
    });
  });

  describe('Mac OS X', () => {
    const seriesConfig = {
      frameworkId: 10,
      option: 'pgo',
      project: PROJECT,
    };
    describe('StyleBench', () => {
      const signatureIds = MAC_STYLEBENCH_SIGNATURES;

      it('the perfDataUrls should match', async () => {
        const urls = perfDataUrls(seriesConfig, signatureIds, 14 * 24 * 3600);
        assert.deepEqual(urls, MAC_STYLEBENCH_URLS);
      });
    });
  });

  describe('Windows 7 32-bit', () => {
    const seriesConfig = {
      frameworkId: 10,
      option: 'opt',
      project: PROJECT,
      platform: 'windows7-32',
    };
    const { frameworkId, platform, project } = seriesConfig;
    fetchMock.get(`${signaturesUrl(project)}?framework=${frameworkId}&platform=${platform}&subtests=0`, WIN7_SIGNATURES);

    describe('MotionMarkAnimometer main score', () => {
      seriesConfig.suite = 'raptor-motionmark-animometer-firefox';
      fetchMock.get(
        perfDataUrls(seriesConfig, [1713376], TIMERANGE)[0],
        WIN7_MMA_DATA,
      );

      it('The benchmark data should match', async () => {
        const data = await queryPerformanceData(
          seriesConfig,
          { includeSubtests: false, timeRange: TIMERANGE },
        );
        assert.deepEqual(data, downcastDatetimesToStrings(WIN7_MMA_EXPECTED_DATA));
      });
    });
  });
});
