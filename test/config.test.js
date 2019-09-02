import { BENCHMARKS, CONFIG, queryInfo } from '../src/config';

it('Verify all benchmarks are defined', () => {
  Object.values(CONFIG.views).map(({ benchmarks }) => (
    benchmarks.forEach((benchmarkKey) => {
      if (!(benchmarkKey in BENCHMARKS)) {
        // eslint-disable-next-line
        console.log(benchmarkKey);
      }
    })
  ));
});

it('Query info', () => {
  const benchmarks = queryInfo(CONFIG.views.linux64, 'Base Content Explicit');
  expect(benchmarks).toStrictEqual({
    'Base Content Explicit': {
      benchmarkUID: 'Base Content Explicit',
      compare: [{
        color: '#e55525',
        frameworkId: 4,
        label: 'Firefox',
        option: 'opt',
        platform: 'linux64-shippable',
        suite: 'Base Content Explicit',
      },
      ],
      includeSubtests: true,
      label: 'Base Content Explicit',
      yLabel: 'Bytes',
    },
  });
});
