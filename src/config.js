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

const BENCHMARKS = process.env.DASHBOARD === 'awsy' ? awsyBenchmarks : awfyBenchmarks;
const queryInfo = process.env.DASHBOARD === 'awsy' ? awsyQueryInfo : awfyQueryInfo;
const CONFIG = process.env.DASHBOARD === 'awsy' ? awsyConfig : awfyConfig;
const TIMERANGE_UPPER_LIMIT = process.env.DASHBOARD === 'awsy' ? awsyTimeRange : awfyTimeRange;

export {
  queryInfo, CONFIG, TIMERANGE_UPPER_LIMIT, BENCHMARKS,
};
