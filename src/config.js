const TALOS_FRAMEWORK_ID = 1;
const RAPTOR_FRAMEWORK_ID = 10;
const JSBENCH_FRAMEWORK_ID = 11;

export const BENCHMARKS = {
  'assorted-dom': {
    compare: {
      'raptor-assorted-dom-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        option: 'opt',
      },
      'raptor-assorted-dom-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-chrome',
        option: 'opt',
      },
    },
    label: 'Assorted DOM',
  },
  kraken: {
    compare: {
      kraken: {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'kraken',
        option: 'opt',
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
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        option: 'opt',
      },
      'raptor-motionmark-animometer-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chrome',
        option: 'opt',
      },
    },
    label: 'MotionMark Animometer',
  },
  'motionmark-htmlsuite': {
    compare: {
      'raptor-motionmark-htmlsuite-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chrome',
        option: 'opt',
      },
    },
    label: 'MotionMark HtmlSuite',
  },
  speedometer: {
    compare: {
      'raptor-speedometer-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        option: 'opt',
      },
      'raptor-speedometer-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chrome',
        option: 'opt',
      },
    },
    label: 'Speedometer',
  },
  stylebench: {
    compare: {
      'raptor-stylebench-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        option: 'opt',
      },
      'raptor-stylebench-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chrome',
        option: 'opt',
      },
    },
    label: 'StyleBench',
  },
  sunspider: {
    compare: {
      'raptor-sunspider-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        option: 'opt',
      },
      'raptor-sunspider-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chrome',
        option: 'opt',
      },
    },
    label: 'SunSpider',
  },
  webaudio: {
    compare: {
      'raptor-webaudio-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        option: 'opt',
      },
      'raptor-webaudio-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chrome',
        option: 'opt',
      },
    },
    label: 'WebAudio',
  },
  'unity-webgl': {
    compare: {
      'raptor-unity-webgl-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        option: 'opt',
      },
      'raptor-unity-webgl-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-chrome',
        option: 'opt',
      },
    },
    label: 'Unity WebGL',
  },
  'wasm-misc': {
    compare: {
      'raptor-wasm-misc-firefox': {
        color: '#e55525',
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
      'raptor-wasm-misc-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-chrome',
        option: 'opt',
      },
    },
    colors: ['#e55525', 'red', 'brown', '#ffcd02'],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium'],
    label: 'WebAssembly Embenchen',
  },
  'wasm-godot': {
    compare: {
      'raptor-wasm-godot-firefox': {
        color: '#e55525',
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        option: 'opt',
      },
      'raptor-wasm-godot-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-baseline-firefox',
        option: 'opt',
      },
      'raptor-wasm-godot-ion-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-ion)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-ion-firefox',
        option: 'opt',
      },
      'raptor-wasm-godot-cranelift-firefox': {
        color: 'yellow',
        label: 'Firefox (wasm-cranelift)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-cranelift-firefox',
        option: 'opt',
      },
      'raptor-wasm-godot-chrome': {
        color: '#ffcd02',
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chrome',
        option: 'opt',
      },
    },
    colors: ['#e55525', 'red', 'brown', '#ffcd02'],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium'],
    label: 'WebAssembly Godot',
  },
  ares6: {
    compare: {
      'ares6-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-sm',
        option: 'opt',
      },
      'ares6-v8': {
        color: '#ffcd02',
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Ares6 (JS shell)',
  },
  octane: {
    compare: {
      'octane-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'octane-sm',
        option: 'opt',
      },
      'octane-v8': {
        color: '#ffcd02',
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
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-sm',
        option: 'opt',
      },
      'six-speed-v8': {
        color: '#ffcd02',
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
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'sunspider-sm',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey'],
    label: 'Sun Spider (JS shell)',
  },
  'web-tooling': {
    compare: {
      'web-tooling-benchmark-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-sm',
        option: 'opt',
      },
      'web-tooling-benchmark-v8': {
        color: '#ffcd02',
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Web Tooling (JS shell)',
  },
  'tp6-amazon': {
    compare: {
      'raptor-tp6-amazon-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-amazon-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Amazon',
  },
  'tp6-docs': {
    compare: {
      'raptor-tp6-docs-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-docs-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Docs',
  },
  'tp6-facebook': {
    compare: {
      'raptor-tp6-facebook-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-facebook-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Facebook',
  },
  'tp6-google': {
    compare: {
      'raptor-tp6-google-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-google-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Google',
  },
  'tp6-sheets': {
    compare: {
      'raptor-tp6-sheets-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-sheets-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Sheets',
  },
  'tp6-slides': {
    compare: {
      'raptor-tp6-slides-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-slides-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Slides',
  },
  'tp6-youtube': {
    compare: {
      'raptor-tp6-youtube-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-youtube-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 YouTube',
  },
  'tp6-imdb': {
    compare: {
      'raptor-tp6-imdb-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-imdb-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Imdb',
  },
  'tp6-imgur': {
    compare: {
      'raptor-tp6-imgur-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-imgur-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Imgur',
  },
  'tp6-wikia': {
    compare: {
      'raptor-tp6-wikia-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-wikia-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Wikia',
  },
  'tp6-bing': {
    compare: {
      'raptor-tp6-bing-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-bing-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Bing',
  },
  'tp6-yandex': {
    compare: {
      'raptor-tp6-yandex-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yandex-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Yandex',
  },
  'tp6-apple': {
    compare: {
      'raptor-tp6-apple-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-apple-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Apple',
  },
  'tp6-microsoft': {
    compare: {
      'raptor-tp6-microsoft-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-microsoft-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Microsoft',
  },
  'tp6-reddit': {
    compare: {
      'raptor-tp6-reddit-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-reddit-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Reddit',
  },
  'tp6-yahoo-news': {
    compare: {
      'raptor-tp6-yahoo-news-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yahoo-news-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Yahoo News',
  },
  'tp6-instagram': {
    compare: {
      'raptor-tp6-instagram-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-instagram-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Instagram',
  },
  'tp6-twitter': {
    compare: {
      'raptor-tp6-twitter-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-twitter-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Twitter',
  },
  'tp6-yahoo-mail': {
    compare: {
      'raptor-tp6-yahoo-mail-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yahoo-mail-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Yahoo Mail',
  },
  speedometerGeckoview: {
    compare: {
      motoG5: {
        color: '#e55525',
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: '#ffcd02',
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-arm7-api-16-pgo',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Speedometer',
  },
};

const ANDROID_SUITES = [
  'speedometerGeckoview',
];

const DEFAULT_SUITES = [
  'kraken',
  'motionmark-animometer',
  'motionmark-htmlsuite',
  'speedometer',
  'stylebench',
  'sunspider',
  'tp6-amazon',
  'tp6-facebook',
  'tp6-google',
  'tp6-youtube',
  'tp6-docs',
  'tp6-sheets',
  'tp6-slides',
  'tp6-imdb',
  'tp6-imgur',
  'tp6-wikia',
  'tp6-bing',
  'tp6-yandex',
  'tp6-apple',
  'tp6-microsoft',
  'tp6-reddit',
  'tp6-yahoo-news',
  'tp6-instagram',
  'tp6-twitter',
  'tp6-yahoo-mail',
  'webaudio',
  'wasm-godot',
];

export const CONFIG = {
  default: {
    landingPath: '/win10/overview?numDays=60',
    timeRange: 60, // # days
    colors: ['#e55525', '#ffcd02'],
    labels: ['Firefox', 'Chromium'],
  },
  platformTransformations: {
    '-chrome': platform => `${platform}-nightly`,
  },
  views: {
    linux64: {
      label: 'Linux 64bit',
      platform: 'linux64',
      benchmarks: DEFAULT_SUITES
        .concat([
          'assorted-dom', 'ares6', 'octane', 'six-speed',
          'sunspider-jsbench', 'unity-webgl', 'wasm-misc',
          'web-tooling']),
    },
    mac: {
      label: 'Mac OS X',
      platform: 'osx-10-10',
      benchmarks: DEFAULT_SUITES,
    },
    win7: {
      label: 'Windows 7 32bit',
      platform: 'windows7-32',
      benchmarks: DEFAULT_SUITES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platform: 'windows10-64',
      benchmarks: DEFAULT_SUITES,
    },
    win10Laptops: {
      label: 'Windows 10 64bit (laptops)',
      platform: 'windows10-64-ux',
      benchmarks: DEFAULT_SUITES,
    },
    windows10Aarch64: {
      label: 'Windows 10 ARM64',
      platform: 'windows10-aarch64',
      benchmarks: DEFAULT_SUITES,
    },
    android: {
      label: 'Android',
      benchmarks: ANDROID_SUITES,
    },
  },
};

// Upper limit for the time range slider measured in days
export const TIMERANGE_UPPER_LIMIT = 365;
