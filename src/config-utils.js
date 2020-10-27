export const processSeries = (seriesConfig, viewConfig) => {
  const result = [];
  // We can have the project property configured on the view
  const overwrittenProject = viewConfig.project ? { project: viewConfig.project } : {};
  // The Android benchmarks have a platform defined per series
  if (!seriesConfig.platform) {
    const { platforms } = viewConfig;
    platforms.forEach((pf) => {
      const newSeriesConfig = { ...seriesConfig, ...overwrittenProject };
      newSeriesConfig.platform = newSeriesConfig.platformSuffix ? `${pf}${newSeriesConfig.platformSuffix}` : pf;
      result.push(newSeriesConfig);
    });
  } else {
    result.push({ ...seriesConfig, ...overwrittenProject });
  }
  return result;
};


// Given a view configuration return a data structure with the data
// structure needed to query Treeherder
export const queryInfoGen = (allBenchmarks, viewConfig, benchmark, category) => {
  const info = {};
  const { benchmarks } = viewConfig;
  if (benchmark === 'overview' && allBenchmarks) {
    if (category in benchmarks) {
      benchmarks[category].suites.forEach((configUID) => {
        info[configUID] = {
          compare: [],
          benchmarkUID: configUID,
          includeSubtests: false,
          label: allBenchmarks[configUID].label,
          yLabel: allBenchmarks[configUID].yLabel,
        };
        // We need to set the platform for fetching data from Treeherder
        Object.values(allBenchmarks[configUID].compare).forEach((seriesConfig) => {
          const oneOrMoreSeries = processSeries(seriesConfig, viewConfig);
          info[configUID].compare = info[configUID].compare.concat(oneOrMoreSeries);
        });
      });
    }
  } else {
    Object.values(allBenchmarks[benchmark].compare).forEach((seriesConfig) => {
      if (!info[benchmark]) {
        info[benchmark] = {
          compare: [],
          benchmarkUID: benchmark,
          includeSubtests: true,
          label: allBenchmarks[benchmark].label,
          yLabel: allBenchmarks[benchmark].yLabel,
        };
      }
      const oneOrMoreSeries = processSeries(seriesConfig, viewConfig);
      info[benchmark].compare = info[benchmark].compare.concat(oneOrMoreSeries);
    });
  }

  return info;
};
