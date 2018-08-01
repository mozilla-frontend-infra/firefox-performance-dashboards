import { parse } from 'query-string';

const matchBrowser = testName => testName
  .replace(/raptor.*-(.*)/, (match, firstMatch) => firstMatch);

const sortAlphabetically = (a, b) => {
  if (a.meta.test < b.meta.test) {
    return -1;
  } else if (a.meta.test > b.meta.test) {
    return 1;
  }
  return 0;
};

const prepareData = (benchmarks) => {
  const newData = {};
  Object.entries(benchmarks).forEach((entry) => {
    const browserKey = matchBrowser(entry[0]);
    const { data, perfherderUrl } = entry[1];
    Object.values(data).sort(sortAlphabetically).forEach((elem) => {
      const { meta } = elem;
      const subbenchmarkData = elem.data;
      if (!newData.benchmark) {
        newData.benchmark = { urls: {} };
        newData.benchmark.urls[browserKey] = perfherderUrl;
        newData.subbenchmarks = {};
      }
      if (!newData.benchmark.urls[browserKey]) {
        newData.benchmark.urls[browserKey] = perfherderUrl;
      }
      if (!newData.subbenchmarks[meta.test]) {
        newData.subbenchmarks[meta.test] = {
          data: [subbenchmarkData],
          meta: {},
          testName: meta.test,
        };
      } else {
        newData.subbenchmarks[meta.test].data.push(subbenchmarkData);
      }
      if (!newData.subbenchmarks[meta.test].jointUrl) {
        newData.subbenchmarks[meta.test].jointUrl = meta.url;
      } else {
        // We're joining the different series for each subbenchmark
        const { series } = parse(meta.url);
        newData.subbenchmarks[meta.test].jointUrl += `&series=${series}`;
      }
      newData.subbenchmarks[meta.test].meta[meta.suite] = meta;
    });
  });

  return newData;
};

export default prepareData;
