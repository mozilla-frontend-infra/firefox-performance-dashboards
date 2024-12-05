/* eslint-disable max-len */
import { BENCHMARKS, CONFIG, queryInfo } from '../src/config';
import { ALT_PROJECT } from '../src/utils/perfherder';

// eslint-disable-next-line jest/expect-expect
it('Verify all benchmarks are defined', () => {
  Object.values(CONFIG.views).map(({ categories }) =>
    Object.values(categories).forEach(({ suites }) =>
      suites.forEach((benchmarkKey) => {
        if (!(benchmarkKey in BENCHMARKS)) {
          console.log(benchmarkKey);
        }
      }),
    ),
  );
});

it('Query info', () => {
  const benchmarks = queryInfo(
    CONFIG.views.linux64,
    'raptor-desktop-wasm-misc',
    'benchmarks',
  );

  expect(benchmarks).toStrictEqual({
    'raptor-desktop-wasm-misc': {
      benchmarkUID: 'raptor-desktop-wasm-misc',
      compare: [
        {
          color: '#FFA056',
          label: 'Firefox (tiering)',
          frameworkId: 13,
          suite: 'wasm-misc',
          application: 'firefox',
          platformSuffix: undefined,
          project: 'mozilla-central',
          option: 'opt',
          extraOptions: ['fission', 'webrender'],
          platform: 'linux64-shippable',
        },
        {
          color: '#FFA056',
          label: 'Firefox (tiering)',
          frameworkId: 13,
          suite: 'wasm-misc',
          application: 'firefox',
          platformSuffix: undefined,
          project: 'mozilla-central',
          option: 'opt',
          extraOptions: ['fission', 'webrender'],
          platform: 'linux1804-64-shippable-qr',
        },
        {
          color: '#00FFFF',
          label: 'Chrome',
          frameworkId: 13,
          suite: 'wasm-misc',
          application: 'custom-car',
          platformSuffix: undefined,
          project: undefined,
          option: 'opt',
          extraOptions: undefined,
          platform: 'linux64-shippable',
        },
        {
          color: '#00FFFF',
          label: 'Chrome',
          frameworkId: 13,
          suite: 'wasm-misc',
          application: 'custom-car',
          platformSuffix: undefined,
          project: undefined,
          option: 'opt',
          extraOptions: undefined,
          platform: 'linux1804-64-shippable-qr',
        },
        {
          color: '#6F4E7C',
          label: 'Safari Technology Preview',
          frameworkId: 13,
          suite: 'wasm-misc',
          application: 'safari-tp',
          platformSuffix: undefined,
          project: undefined,
          option: 'opt',
          extraOptions: undefined,
          platform: 'linux64-shippable',
        },
        {
          color: '#6F4E7C',
          label: 'Safari Technology Preview',
          frameworkId: 13,
          suite: 'wasm-misc',
          application: 'safari-tp',
          platformSuffix: undefined,
          project: undefined,
          option: 'opt',
          extraOptions: undefined,
          platform: 'linux1804-64-shippable-qr',
        },
        {
          color: '#a66e97',
          label: 'Firefox (wasm-baseline)',
          frameworkId: 13,
          suite: 'wasm-misc-baseline',
          application: 'firefox',
          platformSuffix: undefined,
          project: 'mozilla-central',
          option: 'opt',
          extraOptions: ['fission', 'webrender'],
          platform: 'linux64-shippable',
        },
        {
          color: '#a66e97',
          label: 'Firefox (wasm-baseline)',
          frameworkId: 13,
          suite: 'wasm-misc-baseline',
          application: 'firefox',
          platformSuffix: undefined,
          project: 'mozilla-central',
          option: 'opt',
          extraOptions: ['fission', 'webrender'],
          platform: 'linux1804-64-shippable-qr',
        },
        {
          color: '#fe939e',
          label: 'Firefox (wasm-optimizing)',
          frameworkId: 13,
          suite: 'wasm-misc-optimizing',
          application: 'firefox',
          platformSuffix: undefined,
          project: 'mozilla-central',
          option: 'opt',
          extraOptions: ['fission', 'webrender'],
          platform: 'linux64-shippable',
        },
        {
          color: '#fe939e',
          label: 'Firefox (wasm-optimizing)',
          frameworkId: 13,
          suite: 'wasm-misc-optimizing',
          application: 'firefox',
          platformSuffix: undefined,
          project: 'mozilla-central',
          option: 'opt',
          extraOptions: ['fission', 'webrender'],
          platform: 'linux1804-64-shippable-qr',
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
  const benchmarks = queryInfo(
    CONFIG.views.linux64,
    'rasterflood_svg',
    'benchmarks',
  );
  expect(benchmarks).toStrictEqual({
    rasterflood_svg: {
      benchmarkUID: 'rasterflood_svg',
      compare: [
        {
          color: '#FFA056',
          label: 'Firefox',
          frameworkId: 1,
          suite: 'rasterflood_svg',
          platformSuffix: undefined,
          project: ALT_PROJECT,
          option: 'opt',
          platform: 'linux64-shippable',
          extraOptions: ['e10s', 'stylo', 'fission', 'webrender'],
          test: undefined,
        },
        {
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
      docUrl:
        'https://firefox-source-docs.mozilla.org/testing/perfdocs/talos.html#rasterflood-svg',
      includeSubtests: true,
      label: 'Rasterflood SVG',
      yLabel: undefined,
    },
  });
});
