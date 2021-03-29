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
  const benchmarks = queryInfo(CONFIG.views.linux64, 'raptor-webext-desktop-wasm-misc', 'benchmarks');
  expect(benchmarks).toStrictEqual({
    'raptor-webext-desktop-wasm-misc': {
      benchmarkUID: 'raptor-webext-desktop-wasm-misc',
      compare: [
        {
          color: '#FFA056',
          label: 'Firefox (tiering)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable',
          platformSuffix: undefined,
          project: 'autoland',
          extraOptions: ['nocondprof'],
        },
        {
          color: '#dc4c4e',
          label: 'Firefox-Fission',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: '-qr',
          project: 'mozilla-central',
          extraOptions: ['nocondprof', 'fission', 'webrender'],
        },
        {
          color: '#ebc23f',
          label: 'Firefox-WebRender',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable-qr',
          platformSuffix: '-qr',
          project: 'autoland',
          extraOptions: ['nocondprof', 'webrender'],
        },
        {
          color: '#446e9e',
          label: 'Chrome',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-chrome',
          option: 'opt',
          platform: 'linux1804-64-shippable',
          platformSuffix: undefined,
          project: undefined,
          extraOptions: undefined,
        },
        {
          color: '#4f9745',
          label: 'Chromium',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-chromium',
          option: 'opt',
          platform: 'linux1804-64-shippable',
          platformSuffix: undefined,
          project: undefined,
          extraOptions: undefined,
        },
        {
          color: '#a66e97',
          label: 'Firefox (wasm-baseline)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-baseline-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable',
          platformSuffix: undefined,
          project: 'mozilla-central',
          extraOptions: ['nocondprof'],
        },
        {
          color: '#fe939e',
          label: 'Firefox (wasm-optimizing)',
          frameworkId: 10,
          suite: 'raptor-wasm-misc-optimizing-firefox',
          option: 'opt',
          platform: 'linux1804-64-shippable',
          platformSuffix: undefined,
          project: 'mozilla-central',
          extraOptions: ['nocondprof'],
        },
      ],
      docUrl: undefined,
      includeSubtests: true,
      label: 'WebAssembly Embenchen (webext)',
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
        platform: 'linux1804-64-shippable',
        extraOptions: ['e10s', 'stylo'],
        test: undefined,
      },
      {
        color: '#dc4c4e',
        label: 'Firefox-Fission',
        frameworkId: 1,
        suite: 'rasterflood_svg',
        platformSuffix: '-qr',
        project: 'mozilla-central',
        option: 'opt',
        platform: 'linux1804-64-shippable-qr',
        extraOptions: ['e10s', 'stylo', 'fission', 'webrender'],
        test: undefined,
      },
      {
        color: '#ebc23f',
        label: 'Firefox-WebRender',
        frameworkId: 1,
        suite: 'rasterflood_svg',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        platform: 'linux1804-64-shippable-qr',
        extraOptions: ['e10s', 'stylo', 'webrender'],
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
