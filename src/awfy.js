import { PROJECT, ALT_PROJECT } from './utils/perfherder';
import { queryInfoGen } from './config-utils';
import {
  BENCHMARKS as AWSY_BENCHMARKS,
  DEFAULT_CATEGORIES as AWSY_CATEGORIES,
} from './awsy';
import { BENCHMARKS as H3_BENCHMARKS, DEFAULT_SUITES as H3_SUITES } from './h3';

const TALOS_FRAMEWORK_ID = 1;
const JSBENCH_FRAMEWORK_ID = 11;
const BROWSERTIME_FRAMEWORK_ID = 13;

const PALETTE = {
  blue: '#446e9e',
  emerald: '#4f9745',
  indigo: '#6F4E7C',
  red: '#dc4c4e',
  orange: '#FFA056',
  yellow: '#ebc23f',
  violet: '#a66e97',
  pink: '#fe939e',
  cyan: '#00FFFF',
};

export const AWFY_BENCHMARKS = {
  'speedometer-android': {
    compare: {
      'cstm-car-m': {
        color: PALETTE.cyan,
        label: 'Chrome',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'cstm-car-m',
        project: PROJECT,
      },

      fenix: {
        color: PALETTE.orange,
        label: 'Firefox',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fenix',
        project: ALT_PROJECT,
        extraOptions: ['webrender'],
      },
    },
    label: 'Speedometer 2',
  },
  'speedometer3-android': {
    compare: {
      'cstm-car-m': {
        color: PALETTE.cyan,
        label: 'Chrome',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer3',
        option: 'opt',
        application: 'cstm-car-m',
        project: PROJECT,
      },

      fenix: {
        color: PALETTE.orange,
        label: 'Firefox',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer3',
        option: 'opt',
        application: 'fenix',
        project: ALT_PROJECT,
        extraOptions: ['webrender'],
      },
    },
    label: 'Speedometer 3',
  },
};

const DESKTOP_FIREFOX_APPS = {
  firefox: {
    name: 'firefox',
    label: 'Firefox',
    color: PALETTE.orange,
    project: ALT_PROJECT,
    extraOptions: ['fission', 'webrender'],
  },
};

const DESKTOP_APPS = {
  ...DESKTOP_FIREFOX_APPS,
  chrome: {
    name: 'custom-car',
    label: 'Chrome',
    color: PALETTE.cyan,
  },
  safari_tp: {
    name: 'safari-tp',
    label: 'Safari Technology Preview',
    color: PALETTE.indigo,
  },
};

const WASM_APPS = {
  ...DESKTOP_APPS,
  firefox: {
    name: 'firefox',
    label: 'Firefox (tiering)',
    color: PALETTE.orange,
    project: PROJECT,
    extraOptions: ['fission', 'webrender'],
  },
  'baseline-firefox': {
    name: 'firefox',
    label: 'Firefox (wasm-baseline)',
    color: PALETTE.violet,
    project: PROJECT,
    suiteSuffix: 'baseline',
    extraOptions: ['fission', 'webrender'],
  },
  'optimizing-firefox': {
    name: 'firefox',
    label: 'Firefox (wasm-optimizing)',
    color: PALETTE.pink,
    project: PROJECT,
    suiteSuffix: 'optimizing',
    extraOptions: ['fission', 'webrender'],
  },
};

const DESKTOP_CATEGORIES = {
  benchmarks: {
    suites: Object.keys(AWFY_BENCHMARKS),
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
  ...AWSY_CATEGORIES,
  network: {
    suites: H3_SUITES,
    label: 'Network',
  },
};

const TALOS_TESTS = {
  displaylist_mutate: { label: 'Displaylist mutate' },
  glvideo: { label: 'Gl Video', test: 'Mean tick time across 100 ticks: ' },
  kraken: { label: 'Kraken' },
  rasterflood_gradient: { label: 'Rasterflood (Gradient)' },
  rasterflood_svg: { label: 'Rasterflood SVG' },
  tabpaint: {},
  tabswitch: {},
  tart: {},
  tp5o: {},
  ts_paint: {},
  tsvg_static: {},
  tsvgr_opacity: {},
  tsvgx: {},
  sessionrestore: {},
  sessionrestore_no_auto_restore: {},
};

const TALOS_BENCHMARKS = {};
Object.entries(TALOS_TESTS).forEach(([testKey, test]) => {
  const docUrl = `https://firefox-source-docs.mozilla.org/testing/perfdocs/talos.html#${testKey.replace(
    /_/g,
    '-',
  )}`;
  TALOS_BENCHMARKS[testKey] = {
    compare: {},
    label: test.label || testKey,
    docUrl,
  };
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
      TALOS_BENCHMARKS[testKey].compare[appKey].extraOptions.push(
        ...app.extraOptions,
      );
    }
    DESKTOP_CATEGORIES.benchmarks.suites.push(testKey);
  });
});

const RAPTOR_TESTS = {
  'assorted-dom': { label: 'Assorted DOM' },
  'motionmark-animometer': { label: 'MotionMark Animometer' },
  'motionmark-htmlsuite': { label: 'MotionMark HtmlSuite' },
  'motionmark-1-3': { label: 'MotionMark 1.3' },
  'motionmark-htmlsuite-1-3': { label: 'MotionMark HtmlSuite 1.3' },
  speedometer: { label: 'Speedometer 2' },
  speedometer3: { label: 'Speedometer 3' },
  stylebench: { label: 'StyleBench' },
  sunspider: { label: 'SunSpider' },
  webaudio: { label: 'WebAudio' },
  'unity-webgl': { label: 'Unity WebGL' },
  ares6: { label: 'Ares6' },
  'wasm-godot': { label: 'WebAssembly Godot' },
  'wasm-misc': { label: 'WebAssembly Embenchen' },
  jetstream2: { label: 'JetStream 2' },
  'matrix-react-bench': { label: 'Matrix React' },
};

const RAPTOR_BENCHMARKS = {};
Object.entries(RAPTOR_TESTS).forEach(([testKey, test]) => {
  const bmKey = `raptor-desktop-${testKey}`;
  RAPTOR_BENCHMARKS[bmKey] = { compare: {}, label: test.label };
  const apps = testKey.startsWith('wasm') ? WASM_APPS : DESKTOP_APPS;
  Object.entries(apps).forEach(([appKey, app]) => {
    RAPTOR_BENCHMARKS[bmKey].compare[appKey] = {
      color: app.color,
      label: app.label,
      frameworkId: BROWSERTIME_FRAMEWORK_ID,
      suite: [testKey, app.suiteSuffix].filter(Boolean).join('-'),
      application: app.name,
      platformSuffix: app.platformSuffix,
      project: app.project,
      option: 'opt',
      extraOptions: app.extraOptions,
    };
    DESKTOP_CATEGORIES.benchmarks.suites.push(bmKey);
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
  'web-tooling-benchmark': { label: 'Web Tooling' },
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

const SITES = {
  allrecipes: 'All Recipes',
  amazon: 'Amazon',
  'amazon-search': 'Amazon (search)',
  bing: 'Bing',
  'bing-search': 'Bing',
  'bing-search-restaurants': 'Bing (restaurants)',
  booking: 'Booking',
  'booking-sf': 'Booking (hotel)',
  buzzfeed: 'BuzzFeed',
  cnn: 'CNN',
  'cnn-ampstories': 'CNN AMP Stories',
  dailymail: 'Daily Mail',
  discord: 'Discord',
  docs: 'Google Docs',
  ebay: 'Ebay',
  'ebay-kleinanzeigen': 'Ebay Kleinanzeigen',
  'ebay-kleinanzeigen-search': 'Ebay Kleinanzeigen (search)',
  espn: 'ESPN',
  expedia: 'Expedia',
  facebook: 'Facebook',
  'facebook-cristiano': 'Facebook (page)',
  fandom: 'Fandom',
  fashionbeans: 'FashionBeans',
  google: 'Google',
  'google-accounts': 'Google Accounts',
  'google-docs': 'Google Docs',
  'google-docs-canvas': 'Google Docs Canvas Preview',
  'google-search': 'Google',
  'google-search-restaurants': 'Google Restaurants',
  'google-slides': 'Google Slides',
  'google-mail': 'Google Mail',
  'google-maps': 'Google Maps',
  imdb: 'IMDb',
  'imdb-firefox': 'IMDb (title)',
  imgur: 'Imgur',
  instagram: 'Instagram',
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
  sina: 'Sina',
  slides: 'Google Slides',
  stackoverflow: 'StackOverflow',
  'stackoverflow-question': 'StackOverflow (question)',
  tumblr: 'Tumblr',
  twitch: 'Twitch',
  twitter: 'Twitter',
  'urbandictionary-define': 'Urban Dictionary',
  'web-de': 'Web De',
  wikia: 'Wikia',
  'wikia-marvel': 'Wikia',
  wikipedia: 'Wikipedia',
  'yahoo-mail': 'Yahoo Mail',
  youtube: 'YouTube',
  'youtube-watch': 'YouTube Watch',
};

Object.entries(SITES).forEach(([siteKey, siteLabel]) => {
  ['cold', 'warm'].forEach((cacheVariant) => {
    [true, false].forEach((live) => {
      let category = `${cacheVariant}-page-load`;
      let bmKey = `tp6-${siteKey}-${cacheVariant}`;
      if (live) {
        bmKey += '-live';
        category += '-live';
      }
      BENCHMARKS[bmKey] = { compare: {}, label: siteLabel };
      Object.entries(DESKTOP_APPS).forEach(([appKey, app]) => {
        BENCHMARKS[bmKey].compare[appKey] = {
          color: app.color,
          label: app.label,
          frameworkId: BROWSERTIME_FRAMEWORK_ID,
          suite: siteKey,
          test: 'SpeedIndex',
          application: app.name,
          platformSuffix: app.platformSuffix,
          project: live ? PROJECT : app.project,
          option: 'opt',
          extraOptions: [cacheVariant],
        };
        if (live) {
          BENCHMARKS[bmKey].compare[appKey].extraOptions.push('live');
        }
        if (Array.isArray(app.extraOptions)) {
          BENCHMARKS[bmKey].compare[appKey].extraOptions.push(
            ...app.extraOptions,
          );
        }
      });
      DESKTOP_CATEGORIES[category].suites.push(bmKey);
    });
  });
});

const MOBILE_APPS = {
  'cstm-car-m': {
    name: 'cstm-car-m',
    label: 'Chrome',
    color: PALETTE.cyan,
  },
  fenix: {
    name: 'fenix',
    label: 'Fenix-nofis',
    color: PALETTE.orange,
    project: ALT_PROJECT,
    extraOptions: ['webrender'],
  },
  'fenix-fission': {
    name: 'fenix',
    label: 'Fenix-fission',
    color: PALETTE.emerald,
    project: PROJECT,
    extraOptions: ['webrender', 'fission'],
  },
};

const MOBILE_CATEGORIES = {
  benchmarks: {
    suites: ['speedometer-android', 'speedometer3-android'],
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
    [true, false].forEach((live) => {
      let category = `${cacheVariant}-page-load`;
      let bmKey = `tp6m-${siteKey}-${cacheVariant}`;
      if (live) {
        bmKey += '-live';
        category += '-live';
      }
      BENCHMARKS[bmKey] = { compare: {}, label: siteLabel };
      Object.entries(MOBILE_APPS).forEach(([appKey, app]) => {
        BENCHMARKS[bmKey].compare[appKey] = {
          color: app.color,
          label: app.label,
          frameworkId: BROWSERTIME_FRAMEWORK_ID,
          suite: siteKey,
          test: 'SpeedIndex',
          application: app.name,
          platformSuffix: app.platformSuffix,
          project: app.project,
          option: 'opt',
          extraOptions: [cacheVariant],
        };
        if (live) {
          BENCHMARKS[bmKey].compare[appKey].extraOptions.push('live');
          // live sites are running on mozilla-central
          BENCHMARKS[bmKey].compare[appKey].project = PROJECT;
        }
        if (Array.isArray(app.extraOptions)) {
          BENCHMARKS[bmKey].compare[appKey].extraOptions.push(
            ...app.extraOptions,
          );
        }
      });
      MOBILE_CATEGORIES[category].suites.push(bmKey);
    });
  });
});

export const CONFIG = {
  default: {
    landingPath: '/win11/benchmarks/overview?numDays=60',
    dayRange: 60, // # days
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux64-shippable', 'linux1804-64-shippable-qr'],
      categories: DESKTOP_CATEGORIES,
    },
    // mac11m1: {
    //   label: 'macOS 11 "Big Sur" (M1)',
    //   platforms: ['macosx1100-64-shippable-qr'],
    //   categories: DESKTOP_CATEGORIES,
    // },
    mac: {
      label: 'macOS 10.15 "Catalina"',
      platforms: ['macosx1015-64-shippable-qr'],
      categories: DESKTOP_CATEGORIES,
    },
    mac1400: {
      label: 'macOS 14.5 "Sonoma"',
      platforms: ['macosx1400-64-shippable-qr'],
      categories: DESKTOP_CATEGORIES,
    },
    mac1470: {
      label: 'macOS 14.7 "Sonoma"',
      platforms: ['macosx1470-64-shippable'],
      categories: DESKTOP_CATEGORIES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: [
        'windows10-64-shippable-qr',
        'windows10-64-2004-shippable-qr',
      ],
      categories: DESKTOP_CATEGORIES,
    },
    win11: {
      label: 'Windows 11 64bit',
      platforms: ['windows11-64-shippable-qr'],
      categories: DESKTOP_CATEGORIES,
    },
    androidGalaxyA55: {
      label: 'Android (Samsung Galaxy A55)',
      platforms: ['android-hw-a55-14-0-aarch64-shippable'],
      categories: MOBILE_CATEGORIES,
    },
  },
};

// Upper limit for the time range slider measured in days
export const TIMERANGE_UPPER_LIMIT = 365;

// Given a view configuration return a data structure with the data
// structure needed to query Treeherder
// eslint-disable-next-line max-len
export const queryInfo = (viewConfig, benchmark, category) => queryInfoGen(BENCHMARKS, viewConfig, benchmark, category);

export default {
  queryInfo,
  BENCHMARKS,
  CONFIG,
  TIMERANGE_UPPER_LIMIT,
};
