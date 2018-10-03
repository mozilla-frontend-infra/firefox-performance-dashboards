import { CONFIG, TIME_RANGE_LIMIT } from '../config';

const validCombination = (platform, benchmark, timeRange) => (
  CONFIG.platforms[platform] && (
    benchmark === 'overview'
    || CONFIG.platforms[platform].benchmarks.includes(benchmark)
  ) && (
    !!Math.round(timeRange) && parseInt(timeRange, 10) < TIME_RANGE_LIMIT
  )
);

export default validCombination;
