import { generateChartJsOptions } from '../src/utils/chartJs';

it('Options with yLabel', () => {
  const yLabel = 'foo';
  const options = generateChartJsOptions('', yLabel);
  expect(options).toStrictEqual({
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        time: { displayFormats: { hour: 'MMM D' } },
        type: 'time',
      }],
      yAxes: [{
        scaleLabel: { display: true, labelString: yLabel },
        ticks: { beginAtZero: false, reverse: false },
      }],
    },
  });
});

it('Option with higher is better', () => {
  const options = generateChartJsOptions({ lower_is_better: false });
  expect(options).toStrictEqual({
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        time: { displayFormats: { hour: 'MMM D' } },
        type: 'time',
      }],
      yAxes: [{
        scaleLabel: { display: true, labelString: 'Score' },
        ticks: { beginAtZero: false, reverse: true },
      }],
    },
  });
});

it('Option with lower is better', () => {
  const options = generateChartJsOptions({ lower_is_better: true });
  expect(options).toStrictEqual({
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        time: { displayFormats: { hour: 'MMM D' } },
        type: 'time',
      }],
      yAxes: [{
        scaleLabel: { display: true, labelString: 'Execution time (ms)' },
        ticks: { beginAtZero: false, reverse: false },
      }],
    },
  });
});
