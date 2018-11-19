import queryPerfData from '@mozilla-frontend-infra/perf-goggles';
import { BENCHMARKS, CONFIG } from '../config';
import prepareData from './prepareData';
import { convertToSeconds } from './timeRangeUtils';

const fetchData = async (view, benchmark, timeRange = CONFIG.default.timeRange) => {
  const ALL_DATA = {};

  const fetchIt = async (config, options) => {
    const response = await queryPerfData(config, options);
    if (response) {
      Object.values(response).forEach((series) => {
        ALL_DATA[series.meta.id] = {
          ...series,
          ...config,
        };
      });
    }
  };

  if (benchmark === 'overview') {
    const { benchmarks } = CONFIG.views[view];
    await Promise.all(
      benchmarks.map(async (configUID) => {
        await Promise.all(
          Object.values(BENCHMARKS[configUID].compare).map(async config => (
            fetchIt({
              configUID,
              ...config,
              platform: config.suite.includes('-chrome')
                ? `${CONFIG.views[view].platform}-nightly` : CONFIG.views[view].platform,
            },
            { timeRange: convertToSeconds(timeRange) })
          )),
        );
      }),
    );
  } else {
    const configUID = benchmark;
    await Promise.all(
      Object.values(BENCHMARKS[configUID].compare).map(async config => (
        fetchIt({
          configUID,
          ...config,
          platform: config.suite.includes('-chrome')
            ? `${CONFIG.views[view].platform}-nightly` : CONFIG.views[view].platform,
        },
        { includeSubtests: true, timeRange: convertToSeconds(timeRange) })
      )),
    );
  }
  return prepareData(ALL_DATA);
};

export default fetchData;
