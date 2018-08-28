import { parse } from 'query-string';
import colorsAndLabels from './colorsAndLabels';
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
  const newData = { config: {}, subbenchmarks: {} };
  Object.entries(benchmarks).forEach((entry, suiteIndex) => {
    const suite = entry[0]; // e.g. raptor-assorted-dom-chrome
    const { data, configUID, perfherderUrl } = entry[1];
    const { colors, labels } = colorsAndLabels(configUID);
    if (!newData.config[suite]) {
      newData.config[suite] = {
        color: colors[suiteIndex],
        label: labels[suiteIndex],
        url: perfherderUrl,
        suite,
      };
    }
    Object.values(data).sort(sortAlphabetically).forEach((elem) => {
      const { meta } = elem;
      const dataPoints = elem.data;
      // A parent benchmark does not have meta.test
      const uid = meta.test ? meta.test : configUID;
      if (!newData.subbenchmarks[uid]) {
        newData.subbenchmarks[uid] = {
          colors,
          data: [dataPoints],
          labels,
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
