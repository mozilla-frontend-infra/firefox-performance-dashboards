import awfy from './awfy';
import awsy from './awsy';
import h3 from './h3';

let config = {};
if (process.env.REACT_APP_DASHBOARD === 'awfy') {
  config = { ...awfy };
} else if (process.env.REACT_APP_DASHBOARD === 'awsy') {
  config = { ...awsy };
} else if (process.env.REACT_APP_DASHBOARD === 'h3') {
  config = { ...h3 };
}

const { queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT } = config;

export { queryInfo, CONFIG, TIMERANGE_UPPER_LIMIT, BENCHMARKS };
