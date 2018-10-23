import queryPerfData from '@mozilla-frontend-infra/perf-goggles';
import linux64 from '../configuration/js-team/linux64';
import prepareData from './prepareData';
import { convertToSeconds } from './timeRangeUtils';
import DASHBOARD_CONFIG from '../configuration/appDefaults';
import platforms from '../configuration/js-team/index';

const fetchData = async (platform, benchmark, range) => {
  const ALL_DATA = {};

  const fetchIt = async (configUID, overview = false, timeRange = DASHBOARD_CONFIG.timeRange) => {
    const includeSubtests = !overview;
    const comparingBenchmarks = Object.keys(linux64.benchmarks[configUID].compare);
    return Promise.all(comparingBenchmarks
      .map(async (modeKey) => {
        const benchmarkOptions = linux64.benchmarks[configUID].compare[modeKey];
        const seriesConfig = {
          platform: platforms[platform].platform,
          option: benchmarkOptions.buildType,
          ...benchmarkOptions,
        };
        const data = await queryPerfData(
          seriesConfig, includeSubtests, convertToSeconds(timeRange),
        );
        if (data) {
          const { suite } = benchmarkOptions;
          const { color, label } = linux64.benchmarks[configUID].compare[suite];

          Object.values(data).forEach((series) => {
            ALL_DATA[series.meta.id] = {
              ...series,
              configUID,
              color,
              label,
              suite,
            };
          });
        }
      }));
  };

  if (benchmark === 'overview') {
    const benchmarksToCompare = Object.keys(platforms[platform].benchmarks)
      .reduce((res, benchmarkKey) => {
        res.push(benchmarkKey);
        return res;
      }, []);
    await Promise.all(benchmarksToCompare
      .map(async (configUID) => {
        await fetchIt(configUID, true, range);
      }));
  } else {
    await fetchIt(benchmark, false, range);
  }
  return prepareData(ALL_DATA);
};

export default fetchData;
