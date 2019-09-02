export const dataToChartJSformat = (data = []) => data.map(({ datetime, value }) => ({
  x: datetime,
  y: value,
}));

const chartJsOptions = (reverse, scaleLabel) => ({
  maintainAspectRatio: false,
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
          beginAtZero: false,
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

export const generateChartJsOptions = (meta) => {
  const higherIsBetter = (meta.lower_is_better === false);
  const reversed = higherIsBetter;
  const yLabel = higherIsBetter ? 'Score' : 'Execution time (ms)';
  return chartJsOptions(reversed, yLabel);
};
