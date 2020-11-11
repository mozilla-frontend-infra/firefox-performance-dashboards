import { BENCHMARKS, CONFIG, queryInfo } from '../src/config';
import { ALT_PROJECT } from '../src/utils/perfherder';

// eslint-disable-next-line jest/expect-expect
it('Verify all benchmarks are defined', () => {
  Object.values(CONFIG.views).map(({ categories }) => Object.values(categories)
    .forEach(({ suites }) => suites.forEach((benchmarkKey) => {
      if (!(benchmarkKey in BENCHMARKS)) {
      // eslint-disable-next-line
        console.log(benchmarkKey);
      }
    })));
});

it('Query info', () => {
  const benchmarks = queryInfo(CONFIG.views.linux64, 'wasm-misc', 'benchmarks');
  expect(benchmarks).toStrictEqual({
    'wasm-misc': {
      benchmarkUID: 'wasm-misc',
      compare: [
        {
          color: '#FFA056',
          label: 'Firefox (tiering)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-firefox',
          option: 'opt',
          platform: 'linux64-shippable',
        },
        {
          color: '#FFA056',
          frameworkId: 10,
          label: 'Firefox (tiering)',
          option: 'opt',
          platform: 'linux1804-64-shippable',
          suite: 'raptor-wasm-misc-firefox',
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
          color: 'red',
          label: 'Firefox (wasm-baseline)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-baseline-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable',
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
          color: 'brown',
          label: 'Firefox (wasm-ion)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-ion-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable',
        },
        {
          color: '#9DD866',
          label: 'Chromium',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-chromium',
          option: 'opt',
          platform: 'linux64-shippable',
        },
        {
          color: '#9DD866',
          label: 'Chromium',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-chromium',
          option: 'opt',
          platform: 'linux1804-64-shippable',
        },
      ],
      includeSubtests: true,
      label: 'WebAssembly Embenchen',
      yLabel: undefined,
    },
  });
});


it('Query info - suite with explicit project and platformSuffix ', () => {
  const benchmarks = queryInfo(CONFIG.views.linux64, 'rasterflood_svg', 'benchmarks');
  expect(benchmarks).toStrictEqual({
    rasterflood_svg:
      {
        benchmarkUID: 'rasterflood_svg',
        compare: [{
          color: '#FFA056',
          label: 'Firefox',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          project: ALT_PROJECT,
          option: 'opt',
          platform: 'linux64-shippable',
          extraOptions: ['e10s', 'stylo'],
        },
        {
          color: '#FFA056',
          label: 'Firefox',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          project: ALT_PROJECT,
          option: 'opt',
          platform: 'linux1804-64-shippable',
          extraOptions: ['e10s', 'stylo'],
        },
        {
          color: '#e5ca0f',
          label: 'Firefox-Webrender',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          platformSuffix: '-qr',
          project: ALT_PROJECT,
          option: 'opt',
          platform: 'linux64-shippable-qr',
          extraOptions: ['e10s', 'stylo', 'webrender'],
        },
        {
          color: '#e5ca0f',
          label: 'Firefox-Webrender',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          platformSuffix: '-qr',
          project: ALT_PROJECT,
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          extraOptions: ['e10s', 'stylo', 'webrender'],
        },
        {
          color: '#92110c',
          label: 'Firefox-Fission',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          platformSuffix: '-qr',
          option: 'opt',
          platform: 'linux64-shippable-qr',
          extraOptions: ['e10s', 'fission', 'stylo', 'webrender'],
        },
        {
          color: '#92110c',
          label: 'Firefox-Fission',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          platformSuffix: '-qr',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          extraOptions: ['e10s', 'fission', 'stylo', 'webrender'],
        },
        ],
        includeSubtests: true,
        label: 'Rasterflood SVG',
        yLabel: undefined,
      },
  });
});
