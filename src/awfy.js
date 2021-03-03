import { PROJECT, ALT_PROJECT } from './utils/perfherder';
import { queryInfoGen } from './config-utils';
import { BENCHMARKS as AWSY_BENCHMARKS, DEFAULT_CATEGORIES as AWSY_CATEGORIES } from './awsy';
import { BENCHMARKS as H3_BENCHMARKS, DEFAULT_SUITES as H3_SUITES } from './h3';


const TALOS_FRAMEWORK_ID = 1;
const RAPTOR_FRAMEWORK_ID = 10;
const JSBENCH_FRAMEWORK_ID = 11;
const BROWSERTIME_FRAMEWORK_ID = 13;

const PALETTE = {
  blue: '#446e9e',
  emerald: '#4f9745',
  olive: '#9DD866',
  indigo: '#6F4E7C',
  red: '#dc4c4e',
  orange: '#FFA056',
  yellow: '#ebc23f',
  violet: '#a66e97',
  pink: '#fe939e',
};

export const AWFY_BENCHMARKS = {
  'wasm-misc': {
    compare: {
      'raptor-wasm-misc-firefox': {
        color: PALETTE.orange,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-firefox',
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-misc-baseline-firefox': {
        color: PALETTE.violet,
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-baseline-firefox',
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-misc-optimizing-firefox': {
        color: PALETTE.pink,
        label: 'Firefox (wasm-optimizing)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-optimizing-firefox',
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-misc-chromium': {
        color: PALETTE.emerald,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-chromium',
        option: 'opt',
      },
    },
    label: 'WebAssembly Embenchen',
  },
  'wasm-godot': {
    compare: {
      'raptor-wasm-godot-firefox': {
        color: PALETTE.orange,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-godot-baseline-firefox': {
        color: PALETTE.violet,
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-baseline-firefox',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-godot-optimizing-firefox': {
        color: PALETTE.pink,
        label: 'Firefox (wasm-optimizing)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-optimizing-firefox',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['nocondprof'],
      },
      'raptor-wasm-godot-chromium': {
        color: PALETTE.emerald,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chromium',
        option: 'opt',
      },
      'raptor-wasm-godot-chrome': {
        color: PALETTE.blue,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chrome',
        option: 'opt',
      },
      'raptor-wasm-godot-firefox-webrender': {
        color: PALETTE.yellow,
        label: 'Firefox-WebRender',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['nocondprof', 'webrender'],
      },
      'raptor-wasm-godot-firefox-fission': {
        color: PALETTE.red,
        label: 'Firefox-Fission',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['nocondprof', 'fission', 'webrender'],
      },
    },
    label: 'WebAssembly Godot',
  },
  'speedometer-android': {
    compare: {
      fennec: {
        color: PALETTE.olive,
        label: 'Fennec',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fennec',
        extraOptions: ['fennec'],
      },
      geckoview: {
        color: PALETTE.indigo,
        label: 'GeckoView',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'geckoview',
        extraOptions: ['geckoview'],
      },
      'geckoview-webrender': {
        color: PALETTE.red,
        label: 'GeckoView-Webrender',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        platformSuffix: '-qr',
        option: 'opt',
        application: 'geckoview',
        extraOptions: ['geckoview'],
      },
      fenix: {
        color: PALETTE.orange,
        label: 'Fenix',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fenix',
        extraOptions: ['fenix'],
      },
      'fenix-webrender': {
        color: PALETTE.yellow,
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
    color: PALETTE.orange,
    project: ALT_PROJECT,
  },
  'firefox-fission': {
    name: 'firefox',
    label: 'Firefox-Fission',
    color: PALETTE.red,
    platformSuffix: '-qr',
    project: PROJECT,
    extraOptions: ['fission', 'webrender'],
  },
  'firefox-webrender': {
    name: 'firefox',
    label: 'Firefox-WebRender',
    color: PALETTE.yellow,
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
    color: PALETTE.blue,
  },
  chromium: {
    name: 'chromium',
    label: 'Chromium',
    color: PALETTE.emerald,
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
      color: app.color,
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
      color: app.color,
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

const JSBENCH_APPS = {
  sm: {
    label: 'SpiderMonkey',
    color: PALETTE.violet,
    project: ALT_PROJECT,
  },
  v8: {
    label: 'Chromium v8',
    color: PALETTE.pink,
  },
};

const JSBENCH_TESTS = {
  ares6: { label: 'Ares 6' },
  octane: { label: 'Octane' },
  'six-speed': { label: 'Six Speed' },
  sunspider: { label: 'SunSpider' },
  'web-tooling': { label: 'Web Tooling' },
};

Object.entries(JSBENCH_TESTS).forEach(([testKey, test]) => {
  if (!(testKey in BENCHMARKS)) {
    BENCHMARKS[testKey] = { compare: {}, label: test.label };
    DESKTOP_CATEGORIES.benchmarks.suites.push(testKey);
  }
  Object.entries(JSBENCH_APPS).forEach(([appKey, app]) => {
    BENCHMARKS[testKey].compare[appKey] = {
      color: app.color,
      label: app.label,
      frameworkId: JSBENCH_FRAMEWORK_ID,
      suite: `${testKey}-${appKey}`,
      project: app.project,
      option: 'opt',
    };
  });
});

const VISUAL_METRICS = ['SpeedIndex', 'ContentfulSpeedIndex', 'PerceptualSpeedIndex'];

const SITES = {
  allrecipes: 'All Recipes',
  amazon: 'Amazon',
  'amazon-search': 'Amazon (search)',
  apple: 'Apple',
  bbc: 'BBC',
  bing: 'Bing',
  'bing-restaurants': 'Bing (restaurants)',
  'bing-search': 'Bing',
  booking: 'Booking',
  'booking-sf': 'Booking (hotel)',
  cnn: 'CNN',
  'cnn-ampstories': 'CNN AMP Stories',
  discord: 'Discord',
  docs: 'Google Docs',
  ebay: 'Ebay',
  'ebay-kleinanzeigen': 'Ebay Kleinanzeigen',
  'ebay-kleinanzeigen-search': 'Ebay Kleinanzeigen (search)',
  espn: 'ESPN',
  expedia: 'Expedia',
  facebook: 'Facebook',
  'facebook-cristiano': 'Facebook (page)',
  'facebook-redesign': 'Facebook (redesign)',
  fandom: 'Fandom',
  fashionbeans: 'FashionBeans',
  google: 'Google',
  'google-accounts': 'Google Accounts',
  'google-docs': 'Google Docs',
  'google-search': 'Google',
  'google-sheets': 'Google Sheets',
  'google-slides': 'Google Slides',
  'google-mail': 'Google Mail',
  'google-maps': 'Google Maps',
  'google-restaurants': 'Google Restaurants',
  imdb: 'IMDb',
  'imdb-firefox': 'IMDb (title)',
  imgur: 'Imgur',
  instagram: 'Instagram',
  jianshu: 'Jianshu',
  linkedin: 'LinkedIn',
  'medium-article': 'Medium',
  microsoft: 'Microsoft',
  'microsoft-support': 'Microsoft Support',
  netflix: 'Netflix',
  nytimes: 'The New York Times',
  office: 'Office',
  outlook: 'Outlook',
  paypal: 'PayPal',
  'people-article': 'People',
  pinterest: 'Pinterest',
  reddit: 'Reddit',
  'reddit-thread': 'Reddit (thread)',
  'rumble-fox': 'Rumble',
  sheets: 'Google Sheets',
  slides: 'Google Slides',
  stackoverflow: 'StackOverflow',
  'stackoverflow-question': 'StackOverflow (question)',
  tumblr: 'Tumblr',
  twitch: 'Twitch',
  twitter: 'Twitter',
  'urbandictionary-define': 'Urban Dictionary',
  'web-de': 'Web De',
  'wikia-marvel': 'Wikia',
  wikipedia: 'Wikipedia',
  'yahoo-mail': 'Yahoo Mail',
  'yahoo-news': 'Yahoo News',
  yandex: 'Yandex',
  youtube: 'YouTube',
  'youtube-watch': 'YouTube Watch',
};

Object.entries(SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    const bmKey = `tp6-${siteKey}-${cacheVariant}`;
    BENCHMARKS[bmKey] = { compare: {}, label: siteLabel };
    Object.entries(DESKTOP_APPS).forEach(([appKey, app]) => {
      BENCHMARKS[bmKey].compare[appKey] = {
        color: app.color,
        label: app.label,
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: `raptor-tp6-${siteKey}-${app.name}`,
        platformSuffix: app.platformSuffix,
        project: app.project,
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

Object.entries(SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    VISUAL_METRICS.forEach((test) => {
      const bmKey = `tp6-${siteKey}-${test}-${cacheVariant}`;
      BENCHMARKS[bmKey] = { compare: {}, label: `${siteLabel} (${test})` };
      Object.entries(DESKTOP_APPS).forEach(([appKey, app]) => {
        BENCHMARKS[bmKey].compare[appKey] = {
          color: app.color,
          label: app.label,
          frameworkId: BROWSERTIME_FRAMEWORK_ID,
          suite: siteKey,
          test,
          application: app.name,
          platformSuffix: app.platformSuffix,
          project: app.project,
          option: 'opt',
          extraOptions: [cacheVariant, 'nocondprof'],
        };
        if (Array.isArray(app.extraOptions)) {
          BENCHMARKS[bmKey].compare[appKey].extraOptions.push(...app.extraOptions);
        }
      });
      DESKTOP_CATEGORIES[`${cacheVariant}-page-load`].suites.push(bmKey);
    });
  });
});

const MOBILE_APPS = {
  'chrome-m': {
    name: 'chrome-m',
    label: 'Chrome',
    color: PALETTE.blue,
  },
  fenix: {
    name: 'fenix',
    label: 'Fenix',
    color: PALETTE.orange,
    project: 'fenix',
  },
  'fenix-webrender': {
    name: 'fenix',
    label: 'Fenix-WebRender',
    color: PALETTE.yellow,
    project: 'fenix',
    extraOptions: ['webrender'],
  },
  fennec: {
    name: 'fennec',
    label: 'Fennec',
    color: PALETTE.olive,
  },
  geckoview: {
    name: 'geckoview',
    label: 'GeckoView',
    color: PALETTE.indigo,
    project: ALT_PROJECT,
  },
  'geckoview-webrender': {
    name: 'geckoview',
    label: 'GeckoView WebRender',
    color: PALETTE.red,
    project: ALT_PROJECT,
    extraOptions: ['webrender'],
  },
};

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

Object.entries(SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    VISUAL_METRICS.forEach((test) => {
      [true, false].forEach((live) => {
        let category = `${cacheVariant}-page-load`;
        let bmKey = `tp6m-${siteKey}-${test}-${cacheVariant}`;
        if (live) {
          bmKey += '-live';
          category += '-live';
        }
        BENCHMARKS[bmKey] = { compare: {}, label: `${siteLabel} (${test})` };
        Object.entries(MOBILE_APPS).forEach(([appKey, app]) => {
          BENCHMARKS[bmKey].compare[appKey] = {
            color: app.color,
            label: app.label,
            frameworkId: BROWSERTIME_FRAMEWORK_ID,
            suite: siteKey,
            test,
            application: app.name,
            platformSuffix: app.platformSuffix,
            project: app.project,
            option: 'opt',
            extraOptions: [cacheVariant, 'nocondprof'],
          };
          if (live) {
            BENCHMARKS[bmKey].compare[appKey].extraOptions.push('live');
            if (app.name === 'fenix') {
              // fenix live sites are running on mozilla-central
              BENCHMARKS[bmKey].compare[appKey].project = PROJECT;
            }
          }
          if (Array.isArray(app.extraOptions)) {
            BENCHMARKS[bmKey].compare[appKey].extraOptions.push(...app.extraOptions);
          }
        });
        MOBILE_CATEGORIES[category].suites.push(bmKey);
      });
    });
  });
});

export const CONFIG = {
  default: {
    landingPath: '/win10/benchmarks/overview?numDays=60',
    dayRange: 60, // # days
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
