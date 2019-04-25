import queryPerfData from '@mozilla-frontend-infra/perf-goggles';
import { BENCHMARKS, CONFIG } from '../config';
import prepareData from './prepareData';
import { convertToSeconds } from './timeRangeUtils';

export const transformPlatform = (suite, platform) => {
  let pf = platform;
  Object.entries(CONFIG.platformTransformations).forEach(([includesPattern, transformation]) => {
    if (suite.endsWith(includesPattern)) {
      pf = transformation(platform);
    }
  });
  return pf;
};

const fetchData = async (view, benchmark, timeRange = CONFIG.default.timeRange) => {
  const ALL_DATA = {};

  const fetchIt = async (config, options) => {
    try {
      const response = await queryPerfData(config, options);
      if (response) {
        Object.values(response).forEach((series) => {
          ALL_DATA[series.meta.id] = {
            ...series,
            ...config,
          };
        });
      }
    } catch (error) {
      // If we don't let it propragate the rest of the app will continue to work
      // eslint-disable-next-line no-console
      console.error(`We failed to fetch ${config.suite}`);
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
              platform: transformPlatform(
                config.suite,
                CONFIG.views[view].platform || config.platform,
              ),
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
          platform: transformPlatform(
            config.suite,
            CONFIG.views[view].platform || config.platform,
          ),
        },
        { includeSubtests: true, timeRange: convertToSeconds(timeRange) })
      )),
    );
  }
  return prepareData(ALL_DATA);
};

export default fetchData;
