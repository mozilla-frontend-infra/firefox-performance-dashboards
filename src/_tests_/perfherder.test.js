/** @jest-environment setup-polly-jest/jest-environment-node */
import assert from 'assert';
import { perfDataUrls, queryPerformanceData } from '../utils/perfherder';

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
const TALOS_ID = 1;
const LINUX = 'linux64-shippable';
const WINDOWS = 'windows10-64-shippable';

// These tests use the fetch responses available in /recordings.
// If there is no recordings to be used, polly will do the real request
// and persist the responses as recordings.
// The /recordings folder should be deleted once in a while and `yarn test`
// command should be run to generate fresh recordings.

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
    frameworkId: TALOS_ID,
  };

  describe('Linux64', () => {
    it('Kraken (no subtests)', async () => {
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
      seriesConfig.suite = 'tp5o';

      const data = await queryPerformanceData(seriesConfig, {
        timeRange: TIMERANGE,
      });
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
      seriesConfig.suite = 'sessionrestore';

      const data = await queryPerformanceData(seriesConfig, {
        timeRange: TIMERANGE,
      });
      // assert.deepEqual(data, downcastDatetimesToStrings(WIN10_SESSION_RESTORE_EXPECTED_DATA));
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
        const urls = perfDataUrls(seriesConfig, signatureIds, 14 * 24 * 3600);
        assert.deepEqual(urls, MAC_STYLEBENCH_URLS);
      });
    });
  });
});
