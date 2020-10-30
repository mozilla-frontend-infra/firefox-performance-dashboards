import { PROJECT, ALT_PROJECT } from './utils/perfherder';
import { queryInfoGen } from './config-utils';
import { BENCHMARKS as AWSY_BENCHMARKS, DEFAULT_CATEGORIES as AWSY_CATEGORIES } from './awsy';

const TALOS_FRAMEWORK_ID = 1;
const RAPTOR_FRAMEWORK_ID = 10;
const JSBENCH_FRAMEWORK_ID = 11;
const BROWSERTIME_FRAMEWORK_ID = 13;

const COLORS = {
  chrome: '#0B84A5',
  'chrome-m': '#0B84A5',
  chromium: '#9DD866',
  fennec: '#9DD866',
  geckoview: '#6F4E7C',
  fenix: '#FFA056',
  'fenix-webrender': '#e5ca0f',
  firefox: '#FFA056',
  'firefox-webrender': '#e5ca0f',
  'firefox-fission': '#92110c',
};

export const AWFY_BENCHMARKS = {
  'assorted-dom': {
    compare: {
      'raptor-assorted-dom-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-assorted-dom-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-chromium',
        option: 'opt',
      },
      'raptor-assorted-dom-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-assorted-dom-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },

    },
    label: 'Assorted DOM',
  },
  kraken: {
    compare: {
      kraken: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'kraken',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
      'kraken-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'kraken',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo', 'webrender'],
      },
      'kraken-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'kraken',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['e10s', 'fission', 'stylo', 'webrender'],
      },
    },
    label: 'Kraken',
  },
  'motionmark-animometer': {
    compare: {
      'raptor-motionmark-animometer-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-motionmark-animometer-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chromium',
        option: 'opt',
      },
      'raptor-motionmark-animometer-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chrome',
        option: 'opt',
      },
      'raptor-motionmark-animometer-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-motionmark-animometer-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'MotionMark Animometer',
  },
  'motionmark-htmlsuite': {
    compare: {
      'raptor-motionmark-htmlsuite-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chromium',
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chrome',
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-motionmark-htmlsuite-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'MotionMark HtmlSuite',
  },
  speedometer: {
    compare: {
      'raptor-speedometer-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-speedometer-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chromium',
        option: 'opt',
      },
      'raptor-speedometer-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chrome',
        option: 'opt',
      },
      'raptor-speedometer-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-speedometer-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'Speedometer',
  },
  stylebench: {
    compare: {
      'raptor-stylebench-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-stylebench-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chromium',
        option: 'opt',
      },
      'raptor-stylebench-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chrome',
        option: 'opt',
      },
      'raptor-stylebench-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-stylebench-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'StyleBench',
  },
  sunspider: {
    compare: {
      'raptor-sunspider-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-sunspider-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chromium',
        option: 'opt',
      },
      'raptor-sunspider-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chrome',
        option: 'opt',
      },
      'raptor-sunspider-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-sunspider-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'SunSpider',
  },
  webaudio: {
    compare: {
      'raptor-webaudio-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-webaudio-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chromium',
        option: 'opt',
      },
      'raptor-webaudio-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chrome',
        option: 'opt',
      },
      'raptor-webaudio-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-webaudio-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'WebAudio',
  },
  'unity-webgl': {
    compare: {
      'raptor-unity-webgl-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-unity-webgl-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-chromium',
        option: 'opt',
      },
      'raptor-unity-webgl-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-unity-webgl-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'Unity WebGL',
  },
  displaylist_mutate: {
    compare: {
      'displaylist-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'displaylist_mutate',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
      'displaylist-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'displaylist_mutate',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo', 'webrender'],
      },
      'displaylist-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'displaylist_mutate',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['e10s', 'fission', 'stylo', 'webrender'],
      },
    },
    label: 'Displaylist mutate',
  },
  glvideo: {
    compare: {
      glvideo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'glvideo',
        project: ALT_PROJECT,
        test: 'Mean tick time across 100 ticks: ',
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
      'glvideo-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'glvideo',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        test: 'Mean tick time across 100 ticks: ',
        option: 'opt',
        extraOptions: ['e10s', 'stylo', 'webrender'],
      },
    },
    label: 'Gl Video',
  },
  rasterflood_gradient: {
    compare: {
      'rasterflood-gradient': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_gradient',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
      'rasterflood-gradient-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_gradient',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo', 'webrender'],
      },
      'rasterflood-gradient-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_gradient',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['e10s', 'fission', 'stylo', 'webrender'],
      },
    },
    label: 'Rasterflood (Gradient)',
  },
  rasterflood_svg: {
    compare: {
      rasterflood: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_svg',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
      'rasterflood-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_svg',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo', 'webrender'],
      },
      'rasterflood-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_svg',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['e10s', 'fission', 'stylo', 'webrender'],
      },
    },
    label: 'Rasterflood SVG',
  },
  'wasm-misc': {
    compare: {
      'raptor-wasm-misc-firefox': {
        color: COLORS.firefox,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-baseline-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-ion-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-ion)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-ion-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-cranelift-firefox': {
        color: 'yellow',
        label: 'Firefox (wasm-cranelift)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-cranelift-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-chromium',
        option: 'opt',
      },
    },
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium, COLORS.chrome],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium'],
    label: 'WebAssembly Embenchen',
  },
  'wasm-godot': {
    compare: {
      'raptor-wasm-godot-firefox': {
        color: COLORS.firefox,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-wasm-godot-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-baseline-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-wasm-godot-ion-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-ion)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-ion-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-wasm-godot-cranelift-firefox': {
        color: 'yellow',
        label: 'Firefox (wasm-cranelift)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-cranelift-firefox',
        option: 'opt',
      },
      'raptor-wasm-godot-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chromium',
        option: 'opt',
      },
      'raptor-wasm-godot-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chrome',
        option: 'opt',
      },
      'raptor-wasm-godot-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-wasm-godot-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium, COLORS.chrome],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium', 'Chrome'],
    label: 'WebAssembly Godot',
  },
  'ares6-jsshell': {
    compare: {
      'ares6-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'ares6-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Ares6 (JS shell)',
  },
  ares6: {
    compare: {
      'raptor-ares6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-ares6-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-chromium',
        option: 'opt',
      },
      'raptor-ares6-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-chrome',
        option: 'opt',
      },
      'raptor-ares6-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['webrender'],
      },
      'raptor-ares6-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'webrender'],
      },
    },
    label: 'Ares6',
  },
  octane: {
    compare: {
      'octane-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'octane-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'octane-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'octane-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Octane (JS shell)',
  },
  'six-speed': {
    compare: {
      'six-speed-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'six-speed-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Six Speed (JS shell)',
  },
  'sunspider-jsbench': {
    compare: {
      'sunspider-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'sunspider-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey'],
    label: 'Sun Spider (JS shell)',
  },
  'web-tooling': {
    compare: {
      'web-tooling-benchmark-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'web-tooling-benchmark-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Web Tooling (JS shell)',
  },
  'speedometer-android': {
    compare: {
      fennec: {
        color: COLORS.fennec,
        label: 'Fennec',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fennec',
        extraOptions: ['fennec'],
      },
      geckoview: {
        color: COLORS.geckoview,
        label: 'GeckoView',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'geckoview',
        extraOptions: ['geckoview'],
      },
      'geckoview-webrender': {
        color: COLORS['geckoview-webrender'],
        label: 'GeckoView-Webrender',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        platformSuffix: '-qr',
        option: 'opt',
        application: 'geckoview',
        extraOptions: ['geckoview'],
      },
      fenix: {
        color: COLORS.fenix,
        label: 'Fenix',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fenix',
        extraOptions: ['fenix'],
      },
      'fenix-webrender': {
        color: COLORS['fenix-webrender'],
        label: 'Fenix-Webrender',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        platformSuffix: '-qr',
        option: 'opt',
        application: 'fenix',
        extraOptions: ['fenix'],
      },
    },
    label: 'Speedometer',
  },
};

export const BENCHMARKS = { ...AWFY_BENCHMARKS, ...AWSY_BENCHMARKS };

const DESKTOP_SITES = {
  apple: 'Apple',
  amazon: 'Amazon',
  bing: 'Bing',
  docs: 'Google Docs',
  ebay: 'Ebay',
  facebook: 'Facebook',
  fandom: 'Fandom',
  google: 'Google',
  'google-mail': 'Google Mail',
  imdb: 'IMDb',
  imgur: 'Imgur',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  microsoft: 'Microsoft',
  netflix: 'Netflix',
  office: 'Office',
  outlook: 'Outlook',
  paypal: 'PayPal',
  pinterest: 'Pinterest',
  reddit: 'Reddit',
  sheets: 'Google Sheets',
  slides: 'Google Slides',
  twitch: 'Twitch',
  twitter: 'Twitter',
  tumblr: 'Tumblr',
  wikipedia: 'Wikipedia',
  yandex: 'Yandex',
  'yahoo-mail': 'Yahoo Mail',
  'yahoo-news': 'Yahoo News',
  youtube: 'YouTube',
};

const DEFAULT_CATEGORIES = {
  benchmarks: {
    suites: ['ares6', 'displaylist_mutate', 'glvideo', 'kraken', 'motionmark-animometer', 'motionmark-htmlsuite',
      'rasterflood_gradient', 'rasterflood_svg', 'speedometer', 'stylebench', 'sunspider', 'webaudio', 'wasm-godot'],
    label: 'Benchmarks',
  },
  'cold-page-load': {
    suites: [],
    label: 'Cold Page Load',
  },
  'warm-page-load': {
    suites: [],
    label: 'Warm Page Load',
  },
  ...AWSY_CATEGORIES,
};

const DESKTOP_APPS = {
  firefox: {
    name: 'firefox',
    label: 'Firefox',
  },
  'firefox-fission': {
    name: 'firefox',
    label: 'Firefox-Fission',
    platformSuffix: '-qr',
    extraOptions: ['fission', 'webrender'],
  },
  'firefox-webrender': {
    name: 'firefox',
    label: 'Firefox-WebRender',
    platformSuffix: '-qr',
    extraOptions: ['webrender'],
  },
  chrome: {
    name: 'chrome',
    label: 'Chrome',
  },
  chromium: {
    name: 'chromium',
    label: 'Chromium',
  },
};

Object.entries(DESKTOP_SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    const bmKey = `tp6-${siteKey}-${cacheVariant}`;
    BENCHMARKS[bmKey] = { compare: {}, label: siteLabel };
    Object.entries(DESKTOP_APPS).forEach(([appKey, app]) => {
      BENCHMARKS[bmKey].compare[appKey] = {
        color: COLORS[appKey],
        label: app.label,
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: `raptor-tp6-${siteKey}-${app.name}`,
        platformSuffix: app.platformSuffix,
        option: 'opt',
        extraOptions: app.extraOptions,
      };
      if (cacheVariant === 'cold') {
        BENCHMARKS[bmKey].compare[appKey].suite += '-cold';
        if (['firefox', 'firefox-webrender'].includes(appKey)) {
          BENCHMARKS[bmKey].compare[appKey].project = ALT_PROJECT;
        }
      }
    });
    DEFAULT_CATEGORIES[`${cacheVariant}-page-load`].suites.push(bmKey);
  });
});

const LINUX_CATEGORIES = {
  ...DEFAULT_CATEGORIES,
  benchmarks: {
    ...DEFAULT_CATEGORIES.benchmarks,
    suites: DEFAULT_CATEGORIES.benchmarks.suites.concat('assorted-dom', 'ares6-jsshell', 'octane', 'six-speed',
      'sunspider-jsbench', 'unity-webgl', 'wasm-misc', 'web-tooling'),
  },
};

const MOBILE_APPS = {
  'chrome-m': {
    name: 'chrome-m',
    label: 'Chrome',
  },
  fenix: {
    name: 'fenix',
    label: 'Fenix',
    project: 'fenix',
  },
  'fenix-webrender': {
    name: 'fenix',
    label: 'Fenix-WebRender',
    extraOptions: ['webrender'],
  },
  fennec: {
    name: 'fennec',
    label: 'Fennec',
    extraOptions: ['nocondprof'],
  },
  geckoview: {
    name: 'geckoview',
    label: 'GeckoView',
    project: ALT_PROJECT,
  },
};

const MOBILE_SITES = {
  allrecipes: 'All Recipes',
  amazon: 'Amazon',
  'amazon-search': 'Amazon Search',
  bbc: 'BBC',
  bing: 'Bing',
  'bing-restaurants': 'Bing Restaurants',
  booking: 'Booking',
  cnn: 'CNN',
  'cnn-ampstories': 'CNN AMP Stories',
  'ebay-kleinanzeigen': 'Ebay Kleinanzeigen',
  'ebay-kleinanzeigen-search': 'Ebay Kleinanzeigen Search',
  espn: 'ESPN',
  'facebook-cristiano': 'Facebook (Cristiano)',
  facebook: 'Facebook',
  google: 'Google',
  'google-maps': 'Google Maps',
  'google-restaurants': 'Google Restaurants',
  imdb: 'IMDb',
  instagram: 'Instagram',
  jianshu: 'Jianshu',
  'microsoft-support': 'Microsoft Support',
  reddit: 'Reddit',
  stackoverflow: 'StackOverflow',
  'web-de': 'Web De',
  wikipedia: 'Wikipedia',
  youtube: 'YouTube',
  'youtube-watch': 'YouTube Watch',
};


const MOBILE_CATEGORIES = {
  benchmarks: {
    suites: ['speedometer-android'],
    label: 'Benchmarks',
  },
  'cold-page-load': {
    suites: [],
    label: 'Cold Page Load',
  },
  'warm-page-load': {
    suites: [],
    label: 'Warm Page Load',
  },
};


Object.entries(MOBILE_SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    const bmKey = `tp6m-${siteKey}=${cacheVariant}`;
    BENCHMARKS[bmKey] = { compare: {}, label: siteLabel };
    Object.entries(MOBILE_APPS).forEach(([appKey, app]) => {
      BENCHMARKS[bmKey].compare[appKey] = {
        color: COLORS[appKey],
        label: app.label,
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: siteKey,
        application: app.name,
        platformSuffix: app.platformSuffix,
        project: app.project,
        option: 'opt',
        extraOptions: [cacheVariant],
      };
      if (Array.isArray(app.extraOptions)) {
        BENCHMARKS[bmKey].compare[appKey].extraOptions.push(...app.extraOptions);
      }
    });
    MOBILE_CATEGORIES[`${cacheVariant}-page-load`].suites.push(bmKey);
  });
});

export const CONFIG = {
  default: {
    landingPath: '/win10/benchmarks/overview?numDays=60',
    dayRange: 60, // # days
    colors: [COLORS.firefox, COLORS.chromium, COLORS.chrome],
    labels: ['Firefox', 'Chromium', 'Chrome'],
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux64-shippable', 'linux1804-64-shippable'],
      categories: LINUX_CATEGORIES,
    },
    mac: {
      label: 'Mac OS X',
      platforms: ['macosx1014-64-shippable'],
      categories: DEFAULT_CATEGORIES,
    },
    win7: {
      label: 'Windows 7 32bit',
      platforms: ['windows7-32-shippable'],
      categories: DEFAULT_CATEGORIES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64-shippable'],
      categories: DEFAULT_CATEGORIES,
    },

    win10ref2017: {
      label: 'Windows 10 64bit (2017 reference laptop)',
      platforms: ['windows10-64-ux', 'windows10-64-ref-hw-2017'],
      categories: DEFAULT_CATEGORIES,
      project: PROJECT,
    },
    androidMotoG5: {
      label: 'Android (Moto G5)',
      platforms: ['android-hw-g5-7-0-arm7-api-16', 'android-hw-g5-7-0-arm7-api-16-shippable'],
      categories: MOBILE_CATEGORIES,
    },
    androidPixel2: {
      label: 'Android (Pixel 2)',
      platforms: ['android-hw-p2-8-0-android-aarch64', 'android-hw-p2-8-0-android-aarch64-shippable'],
      categories: MOBILE_CATEGORIES,
    },
  },
};

// Upper limit for the time range slider measured in days
export const TIMERANGE_UPPER_LIMIT = 365;

// Given a view configuration return a data structure with the data
// structure needed to query Treeherder
export const queryInfo = (viewConfig, benchmark, category) => queryInfoGen(BENCHMARKS, viewConfig,
  benchmark, category);

export default {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
};
