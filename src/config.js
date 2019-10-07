const TALOS_FRAMEWORK_ID = 1;
const RAPTOR_FRAMEWORK_ID = 10;
const JSBENCH_FRAMEWORK_ID = 11;

const COLORS = {
  chromium: '#4285F4',
  firefox: '#e55525',
};

export const BENCHMARKS = {
  'assorted-dom': {
    compare: {
      'raptor-assorted-dom-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        option: 'opt',
      },
      'raptor-assorted-dom-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-chromium',
        option: 'opt',
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
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
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
        option: 'opt',
      },
      'raptor-motionmark-animometer-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chromium',
        option: 'opt',
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
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chromium',
        option: 'opt',
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
        option: 'opt',
      },
      'raptor-speedometer-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chromium',
        option: 'opt',
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
        option: 'opt',
      },
      'raptor-stylebench-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chromium',
        option: 'opt',
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
        option: 'opt',
      },
      'raptor-sunspider-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chromium',
        option: 'opt',
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
        option: 'opt',
      },
      'raptor-webaudio-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chromium',
        option: 'opt',
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
        option: 'opt',
      },
      'raptor-unity-webgl-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-chromium',
        option: 'opt',
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
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
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
        test: 'Mean tick time across 100 ticks: ',
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
    },
    label: 'Gl Video',
  },
  rasterflood_gradient: {
    compare: {
      rasterflood_gradient: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_gradient',
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
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
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
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
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium],
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
      'raptor-wasm-godot-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chromium',
        option: 'opt',
      },
    },
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium'],
    label: 'WebAssembly Godot',
  },
  'ares6-jsshell': {
    compare: {
      'ares6-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-sm',
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
        option: 'opt',
      },
      'raptor-ares6-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-chromium',
        option: 'opt',
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
  'tp6-amazon': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-amazon-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-amazon-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Amazon',
  },
  'tp6-docs': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-docs-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-docs-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Docs',
  },
  'tp6-facebook': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-facebook-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-facebook-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Facebook',
  },
  'tp6-google': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-google-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-google-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Google',
  },
  'tp6-sheets': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-sheets-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-sheets-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Sheets',
  },
  'tp6-slides': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-slides-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-slides-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Slides',
  },
  'tp6-youtube': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-youtube-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-youtube-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 YouTube',
  },
  'tp6-imdb': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-imdb-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-imdb-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Imdb',
  },
  'tp6-imgur': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-imgur-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-imgur-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Imgur',
  },
  'tp6-fandom': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-fandom-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-fandom-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Fandom',
  },
  'tp6-bing': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-bing-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-bing-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Bing',
  },
  'tp6-yandex': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yandex-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yandex-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Yandex',
  },
  'tp6-apple': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-apple-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-apple-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Apple',
  },
  'tp6-microsoft': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-microsoft-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-microsoft-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Microsoft',
  },
  'tp6-reddit': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-reddit-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-reddit-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Reddit',
  },
  'tp6-yahoo-news': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yahoo-news-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yahoo-news-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Yahoo News',
  },
  'tp6-instagram': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-instagram-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-instagram-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Instagram',
  },
  'tp6-twitch': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-twitch-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-twitch-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Twitch',
  },
  'tp6-twitter': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-twitter-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-twitter-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Twitter',
  },
  'tp6-yahoo-mail': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yahoo-mail-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-yahoo-mail-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Yahoo Mail',
  },
  'tp6-binast-instagram': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-binast-instagram-firefox',
        option: 'opt',
      },
    },
    label: 'Tp6 Binast Instagram',
  },
  'tp6-ebay': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-ebay-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-ebay-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Ebay',
  },
  'tp6-google-mail': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-google-mail-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-google-mail-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Google Mail',
  },
  'tp6-linkedin': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-linkedin-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-linkedin-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Linkedin',
  },
  'tp6-netflix': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-netflix-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-netflix-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Netflix',
  },
  'tp6-office': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-office-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-office-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Office',
  },
  'tp6-outlook': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-outlook-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-outlook-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Outlook',
  },
  'tp6-paypal': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-paypal-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-paypal-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 PayPal',
  },
  'tp6-pinterest': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-pinterest-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-pinterest-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Pinterest',
  },
  'tp6-tumblr': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-tumblr-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-tumblr-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Tumblr',
  },
  'tp6-wikipedia': {
    compare: {
      firefox: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-wikipedia-firefox',
        option: 'opt',
      },
      chromium: {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6-wikipedia-chromium',
        option: 'opt',
      },
    },
    label: 'Tp6 Wikipedia',
  },
  'speedometer-geckoview': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
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
  'tp6m-amazon': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-amazon-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-amazon-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-amazon-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Amazon',
  },
  'tp6m-facebook': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-facebook-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-facebook-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-facebook-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Facebook',
  },
  'tp6m-google': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Google',
  },
  'tp6m-youtube': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-youtube-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-youtube-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-youtube-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 YouTube',
  },
  'tp6m-bing': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bing-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bing-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bing-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Bing',
  },
  'tp6m-bing-restaurants': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bing-restaurants-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bing-restaurants-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bing-restaurants-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Bing restaurants',
  },
  'tp6m-ebay-kleinanzeigen': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-ebay-kleinanzeigen-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-ebay-kleinanzeigen-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-ebay-kleinanzeigen-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Ebay kleinanzeigen',
  },
  'tp6m-ebay-kleinanzeigen-search': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-ebay-kleinanzeigen-search-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-ebay-kleinanzeigen-search-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-ebay-kleinanzeigen-search-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Ebay kleinanzeigen (search)',
  },
  'tp6m-instagram': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-instagram-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-instagram-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-instagram-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Instagram',
  },
  'tp6m-google-maps': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-maps-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-maps-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-maps-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Google Maps',
  },
  'tp6m-google-restaurants': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-restaurants-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-restaurants-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-google-restaurants-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Google restaurants',
  },
  'tp6m-booking': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-booking-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-booking-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-booking-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Booking',
  },
  'tp6m-cnn': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-cnn-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-cnn-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-cnn-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 CNN',
  },
  'tp6m-cnn-ampstories': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-cnn-ampstories-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-cnn-ampstories-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-cnn-ampstories-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 CNN AMP Stories',
  },
  'tp6m-amazon-search': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-amazon-search-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-amazon-search-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-amazon-search-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Amazon search',
  },
  'tp6m-wikipedia': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-wikipedia-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-wikipedia-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-wikipedia-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Wikipedia',
  },
  'tp6m-youtube-watch': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-youtube-watch-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-youtube-watch-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-youtube-watch-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 YouTube watch',
  },
  'tp6m-bbc': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bbc-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bbc-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-bbc-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 BBC',
  },
  'tp6m-reddit': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-reddit-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-reddit-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-reddit-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Reddit',
  },
  'tp6m-stackoverflow': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-stackoverflow-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-stackoverflow-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-stackoverflow-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Stackoverflow',
  },
  'tp6m-imdb': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-imdb-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-imdb-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-imdb-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Imdb',
  },
  'tp6m-jianshu': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-jianshu-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-jianshu-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-jianshu-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Jianshu',
  },
  'tp6m-microsoft-support': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-microsoft--supportgeckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-microsoft--supportgeckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-microsoft-support-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Microsoft support',
  },
  'tp6m-allrecipes': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-allrecipes-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-allrecipes-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-allrecipes-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 All Recipes',
  },
  'tp6m-espn': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-espn-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-espn-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-espn-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Espn',
  },
  'tp6m-web-de': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-web-de-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-web-de-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-web-de-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Web De',
  },
  'tp6m-facebook-cristiano': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-facebook-cristiano-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-facebook-cristiano-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-facebook-cristiano-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Facebook (Cristiano)',
  },
  'tp6m-aframeio-animation': {
    compare: {
      motoG5: {
        color: COLORS.firefox,
        label: 'Moto G5 (armv7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-aframeio-animation-geckoview',
        option: 'pgo',
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
      pixel2arm7: {
        color: COLORS.chromium,
        label: 'Pixel 2 (arm7)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-aframeio-animation-geckoview',
        option: 'pgo',
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
      pixel2arm64: {
        color: '#45a1ff',
        label: 'Pixel 2 (ARM64)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-tp6m-aframeio-animation-geckoview',
        option: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
    label: 'Tp6 Aframe.io (Animation)',
  },
};

const ANDROID_SUITES = [
  'speedometer-geckoview',
  'tp6m-aframeio-animation',
  'tp6m-allrecipes',
  'tp6m-amazon',
  'tp6m-amazon-search',
  'tp6m-bbc',
  'tp6m-bing',
  'tp6m-bing-restaurants',
  'tp6m-booking',
  'tp6m-cnn',
  'tp6m-cnn-ampstories',
  'tp6m-ebay-kleinanzeigen',
  'tp6m-ebay-kleinanzeigen-search',
  'tp6m-espn',
  'tp6m-facebook-cristiano',
  'tp6m-facebook',
  'tp6m-google',
  'tp6m-google-maps',
  'tp6m-google-restaurants',
  'tp6m-imdb',
  'tp6m-instagram',
  'tp6m-jianshu',
  'tp6m-microsoft-support',
  'tp6m-reddit',
  'tp6m-stackoverflow',
  'tp6m-web-de',
  'tp6m-wikipedia',
  'tp6m-youtube',
  'tp6m-youtube-watch',
];

const DEFAULT_SUITES = [
  'ares6',
  'displaylist_mutate',
  'glvideo',
  'kraken',
  'motionmark-animometer',
  'motionmark-htmlsuite',
  'rasterflood_gradient',
  'rasterflood_svg',
  'speedometer',
  'stylebench',
  'sunspider',
  'tp6-amazon',
  'tp6-apple',
  'tp6-binast-instagram',
  'tp6-bing',
  'tp6-docs',
  'tp6-ebay',
  'tp6-facebook',
  'tp6-google',
  'tp6-google-mail',
  'tp6-imdb',
  'tp6-imgur',
  'tp6-instagram',
  'tp6-linkedin',
  'tp6-netflix',
  'tp6-microsoft',
  'tp6-office',
  'tp6-outlook',
  'tp6-paypal',
  'tp6-pinterest',
  'tp6-reddit',
  'tp6-sheets',
  'tp6-slides',
  'tp6-tumblr',
  'tp6-twitch',
  'tp6-twitter',
  'tp6-fandom',
  'tp6-wikipedia',
  'tp6-yahoo-mail',
  'tp6-yahoo-news',
  'tp6-yandex',
  'tp6-youtube',
  'webaudio',
  'wasm-godot',
];

export const CONFIG = {
  default: {
    landingPath: '/win10/overview?numDays=60',
    dayRange: 60, // # days
    colors: [COLORS.firefox, COLORS.chromium],
    labels: ['Firefox', 'Chromium'],
  },
  platformTransformations: {
    // If the suite ends with the pattern modify the platform
    '-chromium': function appendShippable(platform) {
      const suffix = '-shippable';
      return platform.endsWith(suffix) ? platform : `${platform}${suffix}`;
    },
  },
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux64'],
      benchmarks: DEFAULT_SUITES
        .concat([
          'assorted-dom', 'ares6-jsshell', 'octane', 'six-speed',
          'sunspider-jsbench', 'unity-webgl', 'wasm-misc',
          'web-tooling']),
    },
    mac: {
      label: 'Mac OS X',
      platforms: ['macosx1014-64-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    win7: {
      label: 'Windows 7 32bit',
      platforms: ['windows7-32'],
      benchmarks: DEFAULT_SUITES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64'],
      benchmarks: DEFAULT_SUITES,
    },
    win10ref2017: {
      label: 'Windows 10 64bit (2017 reference laptop)',
      platforms: ['windows10-64-ux', 'windows10-64-ref-hw-2017'],
      benchmarks: DEFAULT_SUITES,
    },
    windows10Aarch64: {
      label: 'Windows 10 ARM64',
      platforms: ['windows10-aarch64'],
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


const processSeries = (seriesConfig, viewConfig) => {
  const result = [];
  // The Android benchmarks have a platform defined per series
  if (!seriesConfig.platform) {
    const { platforms } = viewConfig;
    platforms.forEach((pf) => {
      const newSeriesConfig = { ...seriesConfig };
      // Chrome jobs only run on -shippable platforms
      newSeriesConfig.platform = seriesConfig.suite.endsWith('-chromium') ? `${pf}-shippable` : pf;
      result.push(newSeriesConfig);
    });
  } else {
    result.push(seriesConfig);
  }
  return result;
};

// Given a view configuration return a data structure with the data
// structure needed to query Treeherder
export const queryInfo = (viewConfig, benchmark) => {
  const info = {};
  const { benchmarks } = viewConfig;
  if (benchmark === 'overview' && benchmarks) {
    benchmarks.forEach((configUID) => {
      info[configUID] = {
        compare: [],
        benchmarkUID: configUID,
        includeSubtests: false,
        label: BENCHMARKS[configUID].label,
        yLabel: BENCHMARKS[configUID].yLabel,
      };
      // We need to set the platform for fetching data from Treeherder
      Object.values(BENCHMARKS[configUID].compare).forEach((seriesConfig) => {
        const oneOrMoreSeries = processSeries(seriesConfig, viewConfig);
        info[configUID].compare = info[configUID].compare.concat(oneOrMoreSeries);
      });
    });
  } else {
    Object.values(BENCHMARKS[benchmark].compare).forEach((seriesConfig) => {
      if (!info[benchmark]) {
        info[benchmark] = {
          compare: [],
          benchmarkUID: benchmark,
          includeSubtests: true,
          label: BENCHMARKS[benchmark].label,
          yLabel: BENCHMARKS[benchmark].yLabel,
        };
      }
      const oneOrMoreSeries = processSeries(seriesConfig, viewConfig);
      info[benchmark].compare = info[benchmark].compare.concat(oneOrMoreSeries);
    });
  }

  return info;
};
