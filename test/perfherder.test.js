import assert from 'assert';
import { perfDataUrls, queryPerformanceData } from '../src/utils/perfherder';

import LINUX64_KRAKEN_EXPECTED_DATA from './mocks/linux64/kraken/expected.json';
import WIN10_TP5O_EXPECTED_DATA from './mocks/win10/Tp5o/expected.json';
import WIN10_SESSION_RESTORE_EXPECTED_DATA from './mocks/win10/SessionRestore/expected.json';
import MAC_STYLEBENCH_SIGNATURES from './mocks/mac/StyleBench/signatures';
import MAC_STYLEBENCH_URLS from './mocks/mac/StyleBench/urls';

const path = require('path');

const { Polly } = require('@pollyjs/core');
const { setupPolly } = require('setup-polly-jest');
const NodeHttpAdapter = require('@pollyjs/adapter-node-http');
const FSPersister = require('@pollyjs/persister-fs');

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const TIMERANGE = 2 * 24 * 3600;

const downcastDatetimesToStrings = (data) => {
  const newData = { ...data };
  Object.keys(newData).forEach((node) => {
    newData[node].data.forEach((datum, index) => {
      newData[node].data[index].datetime = new Date(datum.push_timestamp * 1000);
    });
  });
  return newData;
};

describe('Perfherder', () => {
  setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, 'recordings'),
      },
    },
  });

  const TALOS_CONFIG = {
    extraOptions: ['e10s', 'stylo'],
    frameworkId: 1,
  };

  describe('Linux64', () => {
    it('Kraken (no subtests)', async () => {
      const seriesConfig = {
        platform: 'linux64-shippable',
        suite: 'kraken',
        option: 'opt',
        project: 'autoland',
        ...TALOS_CONFIG,
      };

      const data = await queryPerformanceData(
        seriesConfig,
        { includeSubtests: false, timeRange: TIMERANGE },
      );

      assert.deepEqual(data, downcastDatetimesToStrings(LINUX64_KRAKEN_EXPECTED_DATA));
    });
  });

  describe('Windows 10', () => {
    const seriesConfig = {
      platform: 'windows10-64-shippable',
      project: 'autoland',
      option: 'opt',
      ...TALOS_CONFIG,
    };

    it('Tp5o opt (no subtests)', async () => {
      seriesConfig.suite = 'tp5o';

      const data = await queryPerformanceData(seriesConfig, { timeRange: TIMERANGE });
      assert.deepEqual(data, downcastDatetimesToStrings(WIN10_TP5O_EXPECTED_DATA));
    });

    it('sessionrestore', async () => {
      seriesConfig.suite = 'sessionrestore';

      const data = await queryPerformanceData(seriesConfig, { timeRange: TIMERANGE });
      assert.deepEqual(data, downcastDatetimesToStrings(WIN10_SESSION_RESTORE_EXPECTED_DATA));
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
        const urls = perfDataUrls(seriesConfig, signatureIds, 14 * 24 * 3600);
        assert.deepEqual(urls, MAC_STYLEBENCH_URLS);
      });
    });
  });
});
