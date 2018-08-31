import { CONFIG } from '../config';

const validCombination = (platform, benchmark) => (
  CONFIG.platforms[platform] && (
    benchmark === 'overview' ||
    CONFIG.platforms[platform].benchmarks.includes(benchmark)
  )
);

export default validCombination;
