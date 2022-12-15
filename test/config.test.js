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
  const benchmarks = queryInfo(CONFIG.views.linux64, 'raptor-desktop-wasm-misc', 'benchmarks');
  expect(benchmarks).toStrictEqual({
    'raptor-desktop-wasm-misc': {
      benchmarkUID: 'raptor-desktop-wasm-misc',
      compare: [
        {
          application: 'firefox',
          color: '#FFA056',
          label: 'Firefox (tiering)',
          frameworkId: 13,
          suite: 'wasm-misc',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: undefined,
          project: 'mozilla-central',
          extraOptions: ['fission', 'webrender'],
        },
        {
          application: 'chrome',
          color: '#446e9e',
          label: 'Chrome',
          frameworkId: 13,
          suite: 'wasm-misc',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: undefined,
          project: undefined,
          extraOptions: undefined,
        },
        {
          application: 'chromium',
          color: '#4f9745',
          label: 'Chromium',
          frameworkId: 13,
          suite: 'wasm-misc',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: undefined,
          project: undefined,
          extraOptions: undefined,
        },
        {
          application: 'safari',
          color: '#ebc23f',
          extraOptions: undefined,
          frameworkId: 13,
          label: 'Safari',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: undefined,
          project: undefined,
          suite: 'wasm-misc',
        },
        {
          application: 'firefox',
          color: '#a66e97',
          label: 'Firefox (wasm-baseline)',
          frameworkId: 13,
          suite: 'wasm-misc-baseline',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: undefined,
          project: 'mozilla-central',
          extraOptions: ['fission', 'webrender'],
        },
        {
          application: 'firefox',
          color: '#fe939e',
          label: 'Firefox (wasm-optimizing)',
          frameworkId: 13,
          suite: 'wasm-misc-optimizing',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: undefined,
          project: 'mozilla-central',
          extraOptions: ['fission', 'webrender'],
        },
      ],
      docUrl: undefined,
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
        platformSuffix: undefined,
        project: ALT_PROJECT,
        option: 'opt',
        platform: 'linux1804-64-shippable-qr',
        extraOptions: ['e10s', 'stylo', 'fission', 'webrender'],
        test: undefined,
      },
      ],
      docUrl: 'https://firefox-source-docs.mozilla.org/testing/perfdocs/talos.html#rasterflood-svg',
      includeSubtests: true,
      label: 'Rasterflood SVG',
      yLabel: undefined,
    },
  });
});
