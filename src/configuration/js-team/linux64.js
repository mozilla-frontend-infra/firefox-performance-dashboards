import SETTINGS from '../perfherderSettings';

const { frameworkIds } = SETTINGS;

const Linux64 = {
  label: 'Linux 64bit',
  benchmarks: {
    kraken: {
      compare: {
        kraken: {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.talos,
          suite: 'kraken',
          buildType: 'opt',
          extraOptions: ['e10s', 'stylo'],
        },
      },
      label: 'Kraken',
    },
    'motionmark-animometer': {
      compare: {
        'raptor-motionmark-animometer-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-motionmark-animometer-firefox',
          buildType: 'opt',
        },
        'raptor-motionmark-animometer-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-motionmark-animometer-chrome',
          buildType: 'opt',
        },
      },
      label: 'MotionMark Animometer',
    },
    'motionmark-htmlsuite': {
      compare: {
        'raptor-motionmark-htmlsuite-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-motionmark-htmlsuite-firefox',
          buildType: 'opt',
        },
        'raptor-motionmark-htmlsuite-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-motionmark-htmlsuite-chrome',
          buildType: 'opt',
        },
      },
      label: 'MotionMark HtmlSuite',
    },
    speedometer: {
      compare: {
        'raptor-speedometer-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-speedometer-firefox',
          buildType: 'opt',
        },
        'raptor-speedometer-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-speedometer-chrome',
          buildType: 'opt',
        },
      },
      label: 'Speedometer',
    },
    stylebench: {
      compare: {
        'raptor-stylebench-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-stylebench-firefox',
          buildType: 'opt',
        },
        'raptor-stylebench-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-stylebench-chrome',
          buildType: 'opt',
        },
      },
      label: 'StyleBench',
    },
    sunspider: {
      compare: {
        'raptor-sunspider-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-sunspider-firefox',
          buildType: 'opt',
        },
        'raptor-sunspider-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-sunspider-chrome',
          buildType: 'opt',
        },
      },
      label: 'SunSpider',
    },
    webaudio: {
      compare: {
        'raptor-webaudio-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-webaudio-firefox',
          buildType: 'opt',
        },
        'raptor-webaudio-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-webaudio-chrome',
          buildType: 'opt',
        },
      },
      label: 'WebAudio',
    },
    'assorted-dom': {
      compare: {
        'raptor-assorted-dom-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-assorted-dom-firefox',
          buildType: 'opt',
        },
        'raptor-assorted-dom-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-assorted-dom-chrome',
          buildType: 'opt',
        },
      },
      label: 'Assorted DOM',
    },
    ares6: {
      compare: {
        'ares6-sm': {
          color: '#e55525',
          label: 'SpiderMonkey',
          frameworkId: frameworkIds.jsbench,
          suite: 'ares6-sm',
          buildType: 'opt',
        },
        'ares6-v8': {
          color: '#ffcd02',
          label: 'Chrome v8',
          frameworkId: frameworkIds.jsbench,
          suite: 'ares6-v8',
          buildType: 'opt',
        },
      },
      labels: ['SpiderMonkey', 'Chrome v8'],
      label: 'Ares6 (JS shell)',
    },
    octane: {
      compare: {
        'octane-sm': {
          color: '#e55525',
          label: 'SpiderMonkey',
          frameworkId: frameworkIds.jsbench,
          suite: 'octane-sm',
          buildType: 'opt',
        },
        'octane-v8': {
          color: '#ffcd02',
          label: 'Chrome v8',
          frameworkId: frameworkIds.jsbench,
          suite: 'octane-v8',
          buildType: 'opt',
        },
      },
      labels: ['SpiderMonkey', 'Chrome v8'],
      label: 'Octane (JS shell)',
    },
    'six-speed': {
      compare: {
        'six-speed-sm': {
          color: '#e55525',
          label: 'SpiderMonkey',
          frameworkId: frameworkIds.jsbench,
          suite: 'six-speed-sm',
          buildType: 'opt',
        },
        'six-speed-v8': {
          color: '#ffcd02',
          label: 'Chrome v8',
          frameworkId: frameworkIds.jsbench,
          suite: 'six-speed-v8',
          buildType: 'opt',
        },
      },
      labels: ['SpiderMonkey', 'Chrome v8'],
      label: 'Six Speed (JS shell)',
    },
    'sunspider-jsbench': {
      compare: {
        'sunspider-sm': {
          color: '#e55525',
          label: 'SpiderMonkey',
          frameworkId: frameworkIds.jsbench,
          suite: 'sunspider-sm',
          buildType: 'opt',
        },
      },
      labels: ['SpiderMonkey'],
      label: 'Sun Spider (JS shell)',
    },
    'unity-webgl': {
      compare: {
        'raptor-unity-webgl-firefox': {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-unity-webgl-firefox',
          buildType: 'opt',
        },
        'raptor-unity-webgl-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-unity-webgl-chrome',
          buildType: 'opt',
        },
      },
      label: 'Unity WebGL',
    },
    'wasm-misc': {
      compare: {
        'raptor-wasm-misc-firefox': {
          color: '#e55525',
          label: 'Firefox (tiering)',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-wasm-misc-firefox',
          buildType: 'opt',
        },
        'raptor-wasm-misc-baseline-firefox': {
          color: 'red',
          label: 'Firefox (wasm-baseline)',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-wasm-misc-baseline-firefox',
          buildType: 'opt',
        },
        'raptor-wasm-misc-ion-firefox': {
          color: 'brown',
          label: 'Firefox (wasm-ion)',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-wasm-misc-ion-firefox',
          buildType: 'opt',
        },
        'raptor-wasm-misc-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-wasm-misc-chrome',
          buildType: 'opt',
        },
      },
      colors: ['#e55525', 'red', 'brown', '#ffcd02'],
      labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chrome'],
      label: 'WebAssembly Embenchen',
    },
    'web-tooling': {
      compare: {
        'web-tooling-benchmark-sm': {
          color: '#e55525',
          label: 'SpiderMonkey',
          frameworkId: frameworkIds.jsbench,
          suite: 'web-tooling-benchmark-sm',
          buildType: 'opt',
        },
        'web-tooling-benchmark-v8': {
          color: '#ffcd02',
          label: 'Chrome v8',
          frameworkId: frameworkIds.jsbench,
          suite: 'web-tooling-benchmark-v8',
          buildType: 'opt',
        },
      },
      labels: ['SpiderMonkey', 'Chrome v8'],
      label: 'Web Tooling (JS shell)',
    },

  },
};

export default Linux64;
