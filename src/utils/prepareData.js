import { parse } from 'query-string';
import { BENCHMARKS } from '../config';

// eslint-disable-next-line arrow-body-style
const sortByLabel = (a, b) => {
  // This helps to guarantee order of labels for the graphs
  return a.label <= b.label ? -1 : 1;
};

const dataToChartJSformat = data => data.map(({ datetime, value }) => ({
  x: datetime,
  y: value,
}));

const chartJsOptions = (reverse, scaleLabel) => ({
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
          reverse,
        },
        scaleLabel: {
          display: true,
          labelString: scaleLabel,
        },
      },
    ],
  },
});

const generateChartJsOptions = (configUID, meta) => {
  const higherIsBetter = (meta.lower_is_better === false);
  const reversed = higherIsBetter;
  let yLabel = higherIsBetter ? 'Score' : 'Execution time (ms)';
  if (BENCHMARKS[configUID].scaleLabel) {
    yLabel = BENCHMARKS[configUID].scaleLabel;
  }
  return chartJsOptions(reversed, yLabel);
};

// This function overlays data from different browsers
const prepareData = (benchmarks) => {
  const newData = { topLabelsConfig: {}, graphs: {} };
  Object.values(benchmarks).sort(sortByLabel).forEach(({
    color, configUID, data, label, meta, perfherderUrl, suite,
  }) => {
    if (!newData.topLabelsConfig[suite] && !suite.includes('overview')) {
      newData.topLabelsConfig[suite] = {
        color,
        label,
        url: perfherderUrl,
        suite,
      };
    }
    const uid = meta.test ? meta.test : `${configUID}-overview`;
    const title = meta.test ? meta.test : BENCHMARKS[configUID].label;

    if (!newData.graphs[uid]) {
      newData.graphs[uid] = {
        configUID,
        chartJsData: { datasets: [] },
        chartJsOptions: generateChartJsOptions(configUID, meta),
        jointUrl: perfherderUrl,
        title,
      };
    } else {
      // We're joining the different series for each subbenchmark
      const { series } = parse(perfherderUrl);
      newData.graphs[uid].jointUrl += `&series=${series}`;
    }

    newData.graphs[uid].chartJsData.datasets.push({
      label,
      backgroundColor: color,
      data: dataToChartJSformat(data),
    });
  });

  return newData;
};

export default prepareData;
