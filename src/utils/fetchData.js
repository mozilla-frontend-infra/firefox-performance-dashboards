import { fetchBenchmarkData, subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import { BENCHMARKS, CONFIG } from '../config';
import prepareData from './prepareData';

const fetchData = async (platform, benchmark) => {
  const ALL_DATA = {};

  const fetchIt = async (fetchMethod, configUID, timeRange = CONFIG.default.timeRange) => {
    throw Error('My error');
    // eslint-disable-next-line
    const comparingBenchmarks = Object.keys(BENCHMARKS[configUID].compare);
    return Promise.all(comparingBenchmarks
      .map(async (modeKey) => {
        const benchmarkOptions = BENCHMARKS[configUID].compare[modeKey];
        const data = await fetchMethod(
          benchmarkOptions.frameworkId,
          CONFIG.platforms[platform].platform,
          benchmarkOptions.suite,
          benchmarkOptions.buildType,
          benchmarkOptions.extraOptions,
          timeRange,
        );
        if (data) {
          const { color, label } = BENCHMARKS[configUID].compare[benchmarkOptions.suite];
          const key = (fetchMethod === fetchBenchmarkData)
            ? `overview-${benchmarkOptions.suite}` : benchmarkOptions.suite;
          ALL_DATA[key] = {
            ...data,
            configUID,
            color,
            label: fetchMethod === fetchBenchmarkData ? benchmarkOptions.label : label,
            suite: benchmarkOptions.suite,
          };
        }
      }));
  };

  if (benchmark === 'overview') {
    const benchmarksToCompare = CONFIG.platforms[platform].benchmarks;
    await Promise.all(benchmarksToCompare
      .map(async (configUID) => {
        await fetchIt(fetchBenchmarkData, configUID);
      }));
  } else {
    await fetchIt(fetchBenchmarkData, benchmark);
    await fetchIt(subbenchmarksData, benchmark);
  }
  return prepareData(ALL_DATA);
};

export default fetchData;
