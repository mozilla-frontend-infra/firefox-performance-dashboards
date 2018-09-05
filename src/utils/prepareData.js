import { parse } from 'query-string';
import { BENCHMARKS } from '../config';

const sortAlphabetically = (a, b) => {
  const aValue = a.meta.test || a.meta.suite;
  const bValue = b.meta.test || b.meta.suite;
  return aValue <= bValue ? -1 : 1;
};

// eslint-disable-next-line arrow-body-style
const sortByLabel = (a, b) => {
  return a.label <= b.label ? -1 : 1;
};

const dataToChartJSformat = data =>
  data.map(({ datetime, value }) => ({
    x: datetime,
    y: value,
  }));

const chartJsOptions = () => ({
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          displayFormats: {
            hour: 'MMM D',
          },
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
});

// This function overlays data from different browsers
const prepareData = (benchmarks) => {
  const newData = { topLabelsConfig: {}, graphs: {} };
  // We're iterating through each mode
  Object.values(benchmarks).sort(sortByLabel).forEach(({
    color, configUID, data, label, perfherderUrl, suite,
  }) => {
    if (!newData.topLabelsConfig[suite] && !suite.includes('overview')) {
      newData.topLabelsConfig[suite] = {
        color,
        label,
        url: perfherderUrl,
        suite,
      };
    }
    // We're either iterating through each test
    // or through an array of 1 representing the overview score
    Object.values(data).sort(sortAlphabetically).forEach((test) => {
      const { meta } = test;
      // A parent benchmark does not have meta.test
      const uid = meta.test ? meta.test : `${configUID}-overview`;

      if (!newData.graphs[uid]) {
        newData.graphs[uid] = {
          chartJsData: { datasets: [] },
          chartJsOptions: chartJsOptions(),
          jointUrl: meta.url,
          title: meta.test ? meta.test : BENCHMARKS[configUID].label,
        };
      }
      newData.graphs[uid].chartJsData.datasets.push({
        label,
        backgroundColor: color,
        data: dataToChartJSformat(test.data),
      });
      // Remove this condition once PerfHerder has been updated
      if (configUID !== 'assorted-dom' && configUID !== 'sunspider') {
        newData.graphs[uid].chartJsOptions.scales.yAxes[0].ticks.reverse =
          (meta.lower_is_better === false);
      }

      if (newData.graphs[uid].jointUrl) {
        // We're joining the different series for each subbenchmark
        const { series } = parse(meta.url);
        newData.graphs[uid].jointUrl += `&series=${series}`;
      }
    });
  });

  return newData;
};

export default prepareData;
