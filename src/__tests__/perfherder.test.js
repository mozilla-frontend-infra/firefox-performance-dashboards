jest.mock('../utils/perfherder', () => ({
  queryPerformanceData: jest.fn(),
  perfDataUrls: jest.fn(),
}));

import assert from 'assert';
import { perfDataUrls, queryPerformanceData } from '../utils/perfherder';
import MAC_STYLEBENCH_SIGNATURES from './mocks/mac/StyleBench/signatures';
import MAC_STYLEBENCH_URLS from './mocks/mac/StyleBench/urls';

const TIMERANGE = 2 * 24 * 3600;
const TALOS_ID = 1;
const LINUX = 'linux64-shippable';
const WINDOWS = 'windows10-64-shippable';

// These tests use the fetch responses available in /recordings.
// The /recordings folder should be deleted once in a while and `yarn test`
// command should be run to generate fresh recordings.

describe('Perfherder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const TALOS_CONFIG = {
    extraOptions: ['e10s', 'stylo'],
    frameworkId: TALOS_ID,
  };

  describe('Linux64', () => {
    it('Kraken (no subtests)', async () => {
      // Mock return value
      queryPerformanceData.mockResolvedValue({
        fakeKey: {
          data: [{ value: 1 }],
          meta: {
            parentSignatureHash: 'fakeKey',
            framework_id: 1,
            machine_platform: 'linux64-shippable',
            suite: 'kraken',
          },
        },
      });
      const seriesConfig = {
        platform: LINUX,
        suite: 'kraken',
        option: 'opt',
        project: 'autoland',
        ...TALOS_CONFIG,
      };

      const data = await queryPerformanceData(seriesConfig, {
        includeSubtests: false,
        timeRange: TIMERANGE,
      });

      expect(data).not.toBeUndefined();
      expect(Object.keys(data)).toHaveLength(1);
      Object.keys(data).forEach((node) => {
        expect(data[node].data.length).toBeGreaterThanOrEqual(1);
        expect(data[node].meta.parentSignatureHash).toEqual(node);
        expect(data[node].meta.framework_id).toEqual(TALOS_ID);
        expect(data[node].meta.machine_platform).toEqual(LINUX);
        expect(data[node].meta.suite).toEqual('kraken');
      });
      // assert.deepEqual(data, downcastDatetimesToStrings(LINUX64_KRAKEN_EXPECTED_DATA));
    });
  });

  describe('Windows 10', () => {
    const seriesConfig = {
      platform: WINDOWS,
      project: 'autoland',
      option: 'opt',
      ...TALOS_CONFIG,
    };

    it('Tp5o opt (no subtests)', async () => {
      // Mock return value
      queryPerformanceData.mockResolvedValue({
        fakeKey: {
          data: [{ value: 1 }],
          meta: {
            parentSignatureHash: 'fakeKey',
            framework_id: 1,
            machine_platform: 'windows10-64-shippable',
            suite: 'tp5o',
          },
        },
      });
      seriesConfig.suite = 'tp5o';

      const data = await queryPerformanceData(seriesConfig, {
        timeRange: TIMERANGE,
      });
      expect(data).not.toBeUndefined();
      // assert.deepEqual(data, downcastDatetimesToStrings(WIN10_TP5O_EXPECTED_DATA));
      expect(Object.keys(data)).toHaveLength(1);
      Object.keys(data).forEach((node) => {
        expect(data[node].data.length).toBeGreaterThanOrEqual(1);
        expect(data[node].meta.parentSignatureHash).toEqual(node);
        expect(data[node].meta.framework_id).toEqual(TALOS_ID);
        expect(data[node].meta.machine_platform).toEqual(WINDOWS);
        expect(data[node].meta.suite).toEqual('tp5o');
      });
    });

    it('sessionrestore', async () => {
      queryPerformanceData.mockResolvedValue({
        fakeKey: {
          data: [{ value: 1 }],
          meta: {
            parentSignatureHash: 'fakeKey',
            framework_id: 1,
            machine_platform: 'windows10-64-shippable',
            suite: 'sessionrestore',
          },
        },
      });
      seriesConfig.suite = 'sessionrestore';

      const data = await queryPerformanceData(seriesConfig, {
        timeRange: TIMERANGE,
      });
      // assert.deepEqual(data, downcastDatetimesToStrings(WIN10_SESSION_RESTORE_EXPECTED_DATA));
      expect(data).not.toBeUndefined();
      expect(Object.keys(data)).toHaveLength(1);
      Object.keys(data).forEach((node) => {
        expect(data[node].data.length).toBeGreaterThanOrEqual(1);
        expect(data[node].meta.parentSignatureHash).toEqual(node);
        expect(data[node].meta.framework_id).toEqual(TALOS_ID);
        expect(data[node].meta.machine_platform).toEqual(WINDOWS);
        expect(data[node].meta.suite).toEqual('sessionrestore');
      });
    });
  });

  describe('Mac OS X', () => {
    const seriesConfig = {
      frameworkId: 10,
      option: 'pgo',
      project: 'mozilla-central',
    };
    describe('StyleBench', () => {
      const signatureIds = MAC_STYLEBENCH_SIGNATURES;

      it('the perfDataUrls should match', async () => {
        const mockUrls = [
          'https://mocked-api.com/data?framework=1&interval=172800&signature_id=abc123',
          'https://mocked-api.com/data?framework=1&interval=172800&signature_id=xyz456',
        ];
        // Mock return value
        perfDataUrls.mockReturnValue(MAC_STYLEBENCH_URLS); // Set return value
        const urls = perfDataUrls(seriesConfig, signatureIds, 14 * 24 * 3600);
        expect(urls).not.toBeUndefined();
        assert.deepEqual(urls, MAC_STYLEBENCH_URLS);
        expect(urls).toEqual(MAC_STYLEBENCH_URLS);
      });
    });
  });
});
