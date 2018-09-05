import { parse } from 'query-string';
import { CONFIG, BENCHMARKS } from '../config';

const colorsAndLabels = configUID => ({
  colors: BENCHMARKS[configUID].colors
    ? BENCHMARKS[configUID].colors
    : CONFIG.default.colors,
  labels: BENCHMARKS[configUID].labels
    ? BENCHMARKS[configUID].labels
    : CONFIG.default.labels,
});

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

const sortByLabel = (a, b) => {
  const aValue = BENCHMARKS[a[1].configUID].compare[a[0]].label;
  const bValue = BENCHMARKS[b[1].configUID].compare[b[0]].label;
  if (aValue > bValue) {
    return -1;
  } else if (aValue < bValue) {
    return 1;
  }
  return 0;
};

const dataToChartJSformat = data =>
  data.map(({ datetime, value }) => ({
    x: datetime,
    y: value,
  }));

// This function overlays data from different browsers
const prepareData = (benchmarks) => {
  const newData = { topLabelsConfig: {}, graphs: {} };
  // We're iterating through each mode
  Object.entries(benchmarks).sort(sortByLabel).forEach((entry, suiteIndex) => {
    const suite = entry[0]; // e.g. raptor-assorted-dom-chrome
    const { configUID, perfherderUrl } = entry[1];
    const { colors, labels } = colorsAndLabels(configUID);
    if (!newData.topLabelsConfig[suite]) {
      newData.topLabelsConfig[suite] = {
        color: colors[suiteIndex],
        label: labels[suiteIndex],
        url: perfherderUrl,
        suite,
      };
    }
    // We're either iterating through each test
    // or through an array of 1 representing the overview score
    Object.values(entry[1].data).sort(sortAlphabetically).forEach(({ data, meta }) => {
      // A parent benchmark does not have meta.test
      const uid = meta.test ? meta.test : configUID;
      if (!newData.graphs[uid]) {
        newData.graphs[uid] = {
          chartJsData: {
            datasets: [],
          },
          meta: {},
          configUID,
          title: meta.test ? meta.test : BENCHMARKS[configUID].label,
        };
      }
      newData.graphs[uid].chartJsData.datasets.push({
        label: BENCHMARKS[configUID].compare[suite].label,
        backgroundColor: BENCHMARKS[configUID].compare[suite].color,
        data: dataToChartJSformat(data),
      });
      // Remove this condition once PerfHerder has been updated
      if (configUID !== 'assorted-dom' && configUID !== 'sunspider') {
        newData.graphs[uid].inverseYaxis = (meta.lower_is_better === false);
      }

      if (!newData.graphs[uid].jointUrl) {
        newData.graphs[uid].jointUrl = meta.url;
      } else {
        // We're joining the different series for each subbenchmark
        const { series } = parse(meta.url);
        newData.graphs[uid].jointUrl += `&series=${series}`;
      }
      newData.graphs[uid].meta[meta.suite] = meta;
    });
  });

  return newData;
};

export default prepareData;
