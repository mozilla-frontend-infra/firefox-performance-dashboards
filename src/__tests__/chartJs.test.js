import {
  addPunctuationToNumbers,
  generateChartJsOptions,
} from '../utils/chartJs';

it('Options with yLabel', () => {
  const yLabel = 'foo';
  const options = generateChartJsOptions('', yLabel);
  expect(options).toStrictEqual({
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          bounds: 'ticks',
          ticks: {
            max: undefined,
            min: undefined,
          },
          time: { displayFormats: { hour: 'MMM D' } },
          type: 'time',
        },
      ],
      yAxes: [
        {
          scaleLabel: { display: true, labelString: yLabel },
          ticks: {
            callback: options.scales.yAxes[0].ticks.callback,
            beginAtZero: false,
            reverse: false,
          },
        },
      ],
    },
  });
});

it('Option with higher is better', () => {
  const options = generateChartJsOptions({ lower_is_better: false });
  expect(options).toStrictEqual({
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          bounds: 'ticks',
          ticks: {
            max: undefined,
            min: undefined,
          },
          time: { displayFormats: { hour: 'MMM D' } },
          type: 'time',
        },
      ],
      yAxes: [
        {
          scaleLabel: { display: true, labelString: 'Score' },
          ticks: {
            callback: options.scales.yAxes[0].ticks.callback,
            beginAtZero: false,
            reverse: true,
          },
        },
      ],
    },
  });
});

it('Option with lower is better', () => {
  const options = generateChartJsOptions({ lower_is_better: true });
  expect(options).toStrictEqual({
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          bounds: 'ticks',
          ticks: {
            max: undefined,
            min: undefined,
          },
          time: { displayFormats: { hour: 'MMM D' } },
          type: 'time',
        },
      ],
      yAxes: [
        {
          scaleLabel: { display: true, labelString: 'Execution time (ms)' },
          ticks: {
            callback: options.scales.yAxes[0].ticks.callback,
            beginAtZero: false,
            reverse: false,
          },
        },
      ],
    },
  });
});

it('Tests that numbers are added commas and numbers', () => {
  expect(addPunctuationToNumbers('1000000')).toStrictEqual('1,000,000');
  expect(addPunctuationToNumbers('1000')).toStrictEqual('1,000');
  expect(addPunctuationToNumbers('5.20')).toStrictEqual('5.20');
  expect(addPunctuationToNumbers('5')).toStrictEqual('5');
});
