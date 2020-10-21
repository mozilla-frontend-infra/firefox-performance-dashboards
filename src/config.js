import awfy from './awfy';
import awsy from './awsy';
import h3 from './h3';

let config = { ...h3 };

const {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
} = config;

export {
  queryInfo, CONFIG, TIMERANGE_UPPER_LIMIT, BENCHMARKS,
};
