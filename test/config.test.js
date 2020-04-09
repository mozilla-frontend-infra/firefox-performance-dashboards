import { BENCHMARKS, CONFIG, queryInfo } from '../src/config';

// eslint-disable-next-line jest/expect-expect
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
  const benchmarks = queryInfo(CONFIG.views.linux64, 'wasm-misc');
  expect(benchmarks).toStrictEqual({
    'wasm-misc': {
      benchmarkUID: 'wasm-misc',
      compare: [
        {
          color: '#e55525',
          label: 'Firefox (tiering)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-firefox',
          option: 'opt',
          platform: 'linux64-shippable',
        },
        {
          color: 'red',
          label: 'Firefox (wasm-baseline)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-baseline-firefox',
          option: 'opt',
          platform: 'linux64-shippable',
        },
        {
          color: 'brown',
          label: 'Firefox (wasm-ion)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-ion-firefox',
          option: 'opt',
          platform: 'linux64-shippable',
        },
        {
          color: 'yellow',
          label: 'Firefox (wasm-cranelift)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-cranelift-firefox',
          option: 'opt',
          platform: 'linux64-shippable',
        },
        {
          color: '#4285F4',
          label: 'Chromium',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-chromium',
          option: 'opt',
          platform: 'linux64-shippable',
        },
      ],
      includeSubtests: true,
      label: 'WebAssembly Embenchen',
      yLabel: undefined,
    },
  });
});
