import { TIMERANGE_UPPER_LIMIT } from '../config';
import platforms from '../configuration/js-team/index';

const validCombination = (platform, benchmark, timeRange) => (
  platforms[platform] && (
    benchmark === 'overview'
    || (benchmark in platforms[platform].benchmarks)
  ) && (
    !!Math.round(timeRange) && parseInt(timeRange, 10) <= TIMERANGE_UPPER_LIMIT
  )
);

export default validCombination;
