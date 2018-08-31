import { fetchBenchmarkData, subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import { BENCHMARKS, CONFIG } from '../config';
import prepareData from './prepareData';

const fetchData = async (platform, benchmark) => {
  const benchmarkData = {};
  if (benchmark === 'overview') {
    const benchmarksToCompare = CONFIG.platforms[platform].benchmarks;
    await Promise.all(benchmarksToCompare
      .map(async (benchmarkKey) => {
        const comparingBenchmarks = Object.keys(BENCHMARKS[benchmarkKey].compare);
        await Promise.all(comparingBenchmarks
          .map(async (modeKey) => {
            const benchmarkOptions = BENCHMARKS[benchmarkKey].compare[modeKey];
            benchmarkData[benchmarkOptions.suite] = await fetchBenchmarkData(
              benchmarkOptions.frameworkId,
              CONFIG.platforms[platform].platform,
              benchmarkOptions.suite,
              benchmarkOptions.buildType,
            );
            benchmarkData[benchmarkOptions.suite].configUID = benchmarkKey;
          }));
      }));
  } else {
    await Promise.all(Object.keys(BENCHMARKS[benchmark].compare)
      .map(async (modeKey) => {
        const benchmarkOptions = BENCHMARKS[benchmark].compare[modeKey];
        benchmarkData[benchmarkOptions.suite] = await subbenchmarksData(
          benchmarkOptions.frameworkId,
          CONFIG.platforms[platform].platform,
          benchmarkOptions.suite,
          benchmarkOptions.buildType,
        );
        benchmarkData[benchmarkOptions.suite].configUID = benchmark;
      }));
  }
  return prepareData(benchmarkData);
};

export default fetchData;
