import { CONFIG, TIMERANGE_UPPER_LIMIT } from '../config';

const validCombination = (platform, benchmark, timeRange) => (
  CONFIG.views[platform] && (
    benchmark === 'overview'
    || CONFIG.views[platform].benchmarks.includes(benchmark)
  ) && (
    !!Math.round(timeRange) && parseInt(timeRange, 10) <= TIMERANGE_UPPER_LIMIT
  )
);

export default validCombination;
