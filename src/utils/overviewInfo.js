import { BENCHMARKS, CONFIG } from '../config';

// XXX Figure out better name
const overviewInfo = (platformView) => {
  const { benchmarks } = CONFIG.views[platformView];
  const info = {};
  benchmarks.forEach((configUID) => {
    info[configUID] = BENCHMARKS[configUID];
  });
  return info;
};

export default overviewInfo;
