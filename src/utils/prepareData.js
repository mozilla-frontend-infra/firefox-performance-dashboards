import { parse } from 'query-string';

const matchBrowser = testName => testName
  .replace(/raptor.*-(.*)/, (match, firstMatch) => firstMatch);

const matchBenchmark = testName => testName
  .replace(/raptor-(.*)-.*/, (match, firstMatch) => firstMatch);

const sortAlphabetically = (a, b) => {
  const aValue = a.meta.test || a.meta.suite;
  const bValue = b.meta.test || b.meta.suite;
  if (aValue < bValue) {
    return -1;
  } else if (aValue > bValue) {
    return 1;
  }
  return 0;
};

// This function overlays data from different browsers
const prepareData = (benchmarks) => {
  const newData = {};
  Object.entries(benchmarks).forEach((benchmarkEntry) => {
    // This is specific to the naming from Raptor (firefox or chrome)
    const browserKey = matchBrowser(benchmarkEntry[0]).replace(/^\w/, c => c.toUpperCase());
    const { data, perfherderUrl } = benchmarkEntry[1];
    Object.values(data).sort(sortAlphabetically).forEach((elem) => {
      const { meta } = elem;
      const dataPoints = elem.data;
      if (!newData.benchmark) {
        newData.benchmark = { urls: {} };
        newData.benchmark.urls[browserKey] = perfherderUrl;
        newData.subbenchmarks = {};
      }
      if (!newData.benchmark.urls[browserKey]) {
        newData.benchmark.urls[browserKey] = perfherderUrl;
      }
      // A parent benchmark does not have meta.test, thus, use meta.suite
      const testUid = meta.test ? meta.test : matchBenchmark(meta.suite);
      if (!newData.subbenchmarks[testUid]) {
        newData.subbenchmarks[testUid] = {
          data: [dataPoints],
          meta: {},
          testUid,
        };
      } else {
        newData.subbenchmarks[testUid].data.push(dataPoints);
      }
      if (!newData.subbenchmarks[testUid].jointUrl) {
        newData.subbenchmarks[testUid].jointUrl = meta.url;
      } else {
        // We're joining the different series for each subbenchmark
        const { series } = parse(meta.url);
        newData.subbenchmarks[testUid].jointUrl += `&series=${series}`;
      }
      newData.subbenchmarks[testUid].meta[meta.suite] = meta;
    });
  });

  return newData;
};

export default prepareData;
