import awfy from './awfy';
import awsy from './awsy';

let config = {};
if (process.env.DASHBOARD === 'awfy') {
  config = { ...awfy };
} else if (process.env.DASHBOARD === 'awsy') {
  config = { ...awsy };
}

const {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
} = config;

export {
  queryInfo, CONFIG, TIMERANGE_UPPER_LIMIT, BENCHMARKS,
};
