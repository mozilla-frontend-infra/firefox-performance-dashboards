import { parse } from 'query-string';
import { BENCHMARKS } from '../config';

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
  Object.entries(benchmarks).forEach((entry) => {
    const suite = entry[0];
    const { data, configUID, perfherderUrl } = entry[1];
    Object.values(data).sort(sortAlphabetically).forEach((elem) => {
      const { meta } = elem;
      const dataPoints = elem.data;
      if (!newData.benchmark) {
        newData.benchmark = { urls: {} };
        newData.benchmark.urls[suite] = perfherderUrl;
        newData.subbenchmarks = {};
      }
      if (!newData.benchmark.urls[suite]) {
        newData.benchmark.urls[suite] = perfherderUrl;
      }
      // A parent benchmark does not have meta.test
      const uid = meta.test ? meta.test : configUID;
      if (!newData.subbenchmarks[uid]) {
        newData.subbenchmarks[uid] = {
          data: [dataPoints],
          meta: {},
          configUID,
        };
        newData.subbenchmarks[uid].title = meta.test
          ? meta.test : BENCHMARKS[configUID].label;
      } else {
        newData.subbenchmarks[uid].data.push(dataPoints);
      }
      if (!newData.subbenchmarks[uid].jointUrl) {
        newData.subbenchmarks[uid].jointUrl = meta.url;
      } else {
        // We're joining the different series for each subbenchmark
        const { series } = parse(meta.url);
        newData.subbenchmarks[uid].jointUrl += `&series=${series}`;
      }
      newData.subbenchmarks[uid].meta[meta.suite] = meta;
    });
  });

  return newData;
};

export default prepareData;
