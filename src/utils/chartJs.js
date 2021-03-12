export const dataToChartJSformat = (data = []) => data.map(({ datetime, value }) => ({
  x: datetime,
  y: value,
}));

export const addPunctuationToNumbers = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const chartJsOptions = (reverse, scaleLabel, minDate, maxDate) => ({
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
        bounds: 'ticks',
        ticks: {
          min: minDate,
          max: maxDate,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: (value) => addPunctuationToNumbers(value),
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

export const generateChartJsOptions = (meta, yLabel, minDate, maxDate) => {
  const higherIsBetter = (meta.lower_is_better === false);
  const reversed = higherIsBetter;
  const label = yLabel || (higherIsBetter ? 'Score' : 'Execution time (ms)');
  return chartJsOptions(reversed, label, minDate, maxDate);
};
