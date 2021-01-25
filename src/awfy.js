import { PROJECT, ALT_PROJECT } from './utils/perfherder';
import { queryInfoGen } from './config-utils';
import { BENCHMARKS as AWSY_BENCHMARKS, DEFAULT_CATEGORIES as AWSY_CATEGORIES } from './awsy';
import { BENCHMARKS as H3_BENCHMARKS, DEFAULT_SUITES as H3_SUITES } from './h3';

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
  'geckoview-webrender': '#92110c',
  fenix: '#FFA056',
  'fenix-webrender': '#e5ca0f',
  firefox: '#FFA056',
  'firefox-webrender': '#e5ca0f',
  'firefox-fission': '#92110c',
};

export const AWFY_BENCHMARKS = {
  'wasm-misc': {
    compare: {
      'raptor-wasm-misc-firefox': {
        color: COLORS.firefox,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-firefox',
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-misc-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-baseline-firefox',
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-misc-optimizing-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-optimizing)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-optimizing-firefox',
        option: 'opt',
        extraOptions: ['nocondprof'],
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
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-optimizing)', 'Chromium'],
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
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-godot-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-baseline-firefox',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-godot-optimizing-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-optimizing)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-optimizing-firefox',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['nocondprof'],
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
        extraOptions: ['nocondprof', 'webrender'],
      },
      'raptor-wasm-godot-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['nocondprof', 'fission', 'webrender'],
      },
    },
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium, COLORS.chrome],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-optimizing)', 'Chromium', 'Chrome'],
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

const DESKTOP_FIREFOX_APPS = {
  firefox: {
    name: 'firefox',
    label: 'Firefox',
    project: ALT_PROJECT,
  },
  'firefox-fission': {
    name: 'firefox',
    label: 'Firefox-Fission',
    platformSuffix: '-qr',
    project: PROJECT,
    extraOptions: ['fission', 'webrender'],
  },
  'firefox-webrender': {
    name: 'firefox',
    label: 'Firefox-WebRender',
    platformSuffix: '-qr',
    project: ALT_PROJECT,
    extraOptions: ['webrender'],
  },
};

const DESKTOP_APPS = {
  ...DESKTOP_FIREFOX_APPS,
  chrome: {
    name: 'chrome',
    label: 'Chrome',
  },
  chromium: {
    name: 'chromium',
    label: 'Chromium',
  },
};

const DESKTOP_CATEGORIES = {
  benchmarks: {
    suites: Object.keys(AWFY_BENCHMARKS),
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
  network: {
    suites: H3_SUITES,
    label: 'Network',
  },
};

const TALOS_TESTS = {
  kraken: { label: 'Kraken' },
  displaylist_mutate: { label: 'Displaylist mutate' },
  glvideo: { label: 'Gl Video', test: 'Mean tick time across 100 ticks: ' },
  rasterflood_gradient: { label: 'Rasterflood (Gradient)' },
  rasterflood_svg: { label: 'Rasterflood SVG' },
};

const TALOS_BENCHMARKS = {};
Object.entries(TALOS_TESTS).forEach(([testKey, test]) => {
  TALOS_BENCHMARKS[testKey] = { compare: {}, label: test.label };
  Object.entries(DESKTOP_FIREFOX_APPS).forEach(([appKey, app]) => {
    TALOS_BENCHMARKS[testKey].compare[appKey] = {
      color: COLORS[appKey],
      label: app.label,
      frameworkId: TALOS_FRAMEWORK_ID,
      suite: testKey,
      test: test.test,
      platformSuffix: app.platformSuffix,
      project: app.project,
      option: 'opt',
      extraOptions: ['e10s', 'stylo'],
    };
    if (Array.isArray(app.extraOptions)) {
      TALOS_BENCHMARKS[testKey].compare[appKey].extraOptions.push(...app.extraOptions);
    }
    DESKTOP_CATEGORIES.benchmarks.suites.push(testKey);
  });
});

const RAPTOR_TESTS = {
  'assorted-dom': { label: 'Assorted DOM' },
  'motionmark-animometer': { label: 'MotionMark Animometer' },
  'motionmark-htmlsuite': { label: 'MotionMark HtmlSuite' },
  speedometer: { label: 'Speedometer' },
  stylebench: { label: 'StyleBench' },
  sunspider: { label: 'SunSpider' },
  webaudio: { label: 'WebAudio' },
  'unity-webgl': { label: 'Unity WebGL' },
  ares6: { label: 'Ares6' },
};

const RAPTOR_BENCHMARKS = {};
Object.entries(RAPTOR_TESTS).forEach(([testKey, test]) => {
  RAPTOR_BENCHMARKS[testKey] = { compare: {}, label: test.label };
  Object.entries(DESKTOP_APPS).forEach(([appKey, app]) => {
    RAPTOR_BENCHMARKS[testKey].compare[appKey] = {
      color: COLORS[appKey],
      label: app.label,
      frameworkId: RAPTOR_FRAMEWORK_ID,
      suite: `raptor-${testKey}-${app.name}`,
      platformSuffix: app.platformSuffix,
      project: app.project,
      option: 'opt',
      // FIXME: chrome raptor benchmark tests do not contain 'nocondprod' extra option
      extraOptions: Object.keys(DESKTOP_FIREFOX_APPS).includes(appKey) ? ['nocondprof'] : app.extraOptions,
    };
    if (Array.isArray(app.extraOptions)) {
      RAPTOR_BENCHMARKS[testKey].compare[appKey].extraOptions.push(...app.extraOptions);
    }
    DESKTOP_CATEGORIES.benchmarks.suites.push(testKey);
  });
});

export const BENCHMARKS = {
  ...TALOS_BENCHMARKS,
  ...RAPTOR_BENCHMARKS,
  ...AWFY_BENCHMARKS,
  ...AWSY_BENCHMARKS,
  ...H3_BENCHMARKS,
};

const LIVE_SITES = {
  'booking-sf': 'Booking (hotel)',
  discord: 'Discord',
  expedia: 'Expedia',
  fashionbeans: 'FashionBeans',
  'google-accounts': 'Google Accounts',
  'imdb-firefox': 'IMDb (title)',
  'medium-article': 'Medium',
  nytimes: 'The New York Times',
  'people-article': 'People',
  'reddit-thread': 'Reddit (thread)',
  'rumble-fox': 'Rumble',
  'stackoverflow-question': 'StackOverflow (question)',
  'urbandictionary-define': 'Urban Dictionary',
  'wikia-marvel': 'Wikia',
};

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
        extraOptions: ['nocondprof'],
      };
      if (Array.isArray(app.extraOptions)) {
        BENCHMARKS[bmKey].compare[appKey].extraOptions.push(...app.extraOptions);
      }
      if (cacheVariant === 'cold') {
        BENCHMARKS[bmKey].compare[appKey].suite += '-cold';
        if (['firefox', 'firefox-webrender'].includes(appKey)) {
          BENCHMARKS[bmKey].compare[appKey].project = ALT_PROJECT;
        }
      }
    });
    DESKTOP_CATEGORIES[`${cacheVariant}-page-load`].suites.push(bmKey);
  });
});

const MOBILE_APPS = {
  'chrome-m': {
    name: 'chrome-m',
    label: 'Chrome',
    extraOptions: ['nocondprof'],
  },
  fenix: {
    name: 'fenix',
    label: 'Fenix',
    project: 'fenix',
    extraOptions: ['nocondprof'],
  },
  'fenix-webrender': {
    name: 'fenix',
    label: 'Fenix-WebRender',
    project: 'fenix',
    extraOptions: ['webrender', 'nocondprof'],
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
    extraOptions: ['nocondprof'],
  },
  'geckoview-webrender': {
    name: 'geckoview',
    label: 'GeckoView WebRender',
    project: ALT_PROJECT,
    extraOptions: ['webrender', 'nocondprof'],
  },
};

const MOBILE_SITES = {
  allrecipes: 'All Recipes',
  amazon: 'Amazon',
  'amazon-search': 'Amazon (search)',
  bbc: 'BBC',
  bing: 'Bing',
  'bing-restaurants': 'Bing (restaurants)',
  booking: 'Booking',
  cnn: 'CNN',
  'cnn-ampstories': 'CNN AMP Stories',
  'ebay-kleinanzeigen': 'Ebay Kleinanzeigen',
  'ebay-kleinanzeigen-search': 'Ebay Kleinanzeigen (search)',
  espn: 'ESPN',
  'facebook-cristiano': 'Facebook (page)',
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

const MOBILE_LIVE_SITES = { ...MOBILE_SITES, ...LIVE_SITES };

const MOBILE_CATEGORIES = {
  benchmarks: {
    suites: ['speedometer-android'],
    label: 'Benchmarks',
  },
  'cold-page-load': {
    suites: [],
    label: 'Cold Page Load (Recorded)',
  },
  'cold-page-load-live': {
    suites: [],
    label: 'Cold Page Load (Live)',
  },
  'warm-page-load': {
    suites: [],
    label: 'Warm Page Load (Recorded)',
  },
  'warm-page-load-live': {
    suites: [],
    label: 'Warm Page Load (Live)',
  },
};

Object.entries(MOBILE_SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    const bmKey = `tp6m-${siteKey}-${cacheVariant}`;
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

Object.entries(MOBILE_LIVE_SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    const bmKey = `tp6m-${siteKey}-${cacheVariant}-live`;
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
        extraOptions: [cacheVariant, 'live'],
      };
      if (app.name === 'fenix') {
        // fenix live sites are running on mozilla-central
        BENCHMARKS[bmKey].compare[appKey].project = PROJECT;
      }
      if (Array.isArray(app.extraOptions)) {
        BENCHMARKS[bmKey].compare[appKey].extraOptions.push(...app.extraOptions);
      }
    });
    MOBILE_CATEGORIES[`${cacheVariant}-page-load-live`].suites.push(bmKey);
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
      categories: DESKTOP_CATEGORIES,
    },
    mac: {
      label: 'Mac OS X',
      platforms: ['macosx1014-64-shippable'],
      categories: DESKTOP_CATEGORIES,
    },
    win7: {
      label: 'Windows 7 32bit',
      platforms: ['windows7-32-shippable'],
      categories: DESKTOP_CATEGORIES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64-shippable'],
      categories: DESKTOP_CATEGORIES,
    },

    win10ref2017: {
      label: 'Windows 10 64bit (2017 reference laptop)',
      platforms: ['windows10-64-ux', 'windows10-64-ref-hw-2017'],
      categories: DESKTOP_CATEGORIES,
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
