/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-self-compare */

import {
  queryInfo as awfyQueryInfo,
  CONFIG as awfyConfig,
  TIMERANGE_UPPER_LIMIT as awfyTimeRange,
  BENCHMARKS as awfyBenchmarks,
} from './awfy';

import {
  queryInfo as awsyQueryInfo,
  CONFIG as awsyConfig,
  TIMERANGE_UPPER_LIMIT as awsyTimeRange,
  BENCHMARKS as awsyBenchmarks,
} from './awsy';

const BENCHMARKS = process.env.DASHBOARD === 'awfy' ? awfyBenchmarks : awsyBenchmarks;
const queryInfo = process.env.DASHBOARD === 'awfy' ? awfyQueryInfo : awsyQueryInfo;
const CONFIG = process.env.DASHBOARD === 'awfy' ? awfyConfig : awsyConfig;
const TIMERANGE_UPPER_LIMIT = process.env.DASHBOARD === 'awfy' ? awsyTimeRange : awfyTimeRange;

export {
  queryInfo, CONFIG, TIMERANGE_UPPER_LIMIT, BENCHMARKS,
};
