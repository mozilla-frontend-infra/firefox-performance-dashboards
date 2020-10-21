const BROWSERTIME_FRAMEWORK_ID = 13;

const COLORS = {
  http2: '#FFA056',
  http3: '#9DD866',
};

export const BENCHMARKS = {
  'g-image': {
    compare: {
      'g-image-http2': {
        color: COLORS.http2,
        label: 'HTTP2',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'g-image',
        option: 'opt',
      },
      'g-image-http3': {
        color: COLORS.http3,
        label: 'HTTP3',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'g-image',
        option: 'opt',
        extraOptions: ['http3'],
      },
    },
    label: 'g-image',
  },

  'lq-fetch': {
    compare: {
      'lq-fetch': {
        color: COLORS.http2,
        label: 'HTTP2',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'lq-fetch',
        option: 'opt',
      },
      'lq-fetch-http3': {
        color: COLORS.http3,
        label: 'HTTP3',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'lq-fetch',
        option: 'opt',
        extraOptions: ['http3'],
      },
    },
    label: 'https://lucaspardue.com/quictilesfetch.html',
  },

  'youtube-noscroll': {
    compare: {
      'youtube-noscroll-http2': {
        color: COLORS.http2,
        label: 'HTTP2',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'youtube-noscroll',
        option: 'opt',
      },
      'youtube-noscroll-http3': {
        color: COLORS.http3,
        label: 'HTTP3',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'youtube-noscroll',
        option: 'opt',
        extraOptions: ['http3'],
      },
    },
    label: 'Youtube no scrolling',
  },

  'youtube-scroll': {
    compare: {
      'youtube-scroll-http2': {
        color: COLORS.http2,
        label: 'HTTP2',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'youtube-scroll',
        option: 'opt',
      },
      'youtube-scroll-http3': {
        color: COLORS.http3,
        label: 'HTTP3',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'youtube-scroll',
        option: 'opt',
        extraOptions: ['http3'],
      },
    },
    label: 'Youtube with scrolling',
  },
};

const DEFAULT_SUITES = [
  'g-image',
  'youtube-noscroll',
  'youtube-scroll',
  'lq-fetch',
];

const SITES_LIST = {
  cloudflare: 'Cloudflare',
  'g-search': 'Google search',
  'facebook-scroll': 'Facebook',
};

const PAUSE_DURATION = [
  '10s',
  '25s',
  '35s',
  '60s',
];

Object.keys(SITES_LIST).forEach((siteKey) => {
  PAUSE_DURATION.forEach((dur) => {
    const bmKey = `${siteKey}-${dur}`;
    BENCHMARKS[bmKey] = { compare: {}, label: `${SITES_LIST[siteKey]} pause=${dur}` };
    BENCHMARKS[bmKey].compare.http2 = {
      color: COLORS.http2,
      label: 'HTTP2',
      frameworkId: BROWSERTIME_FRAMEWORK_ID,
      suite: siteKey,
      option: 'opt',
      extraOptions: [dur],
    };
    BENCHMARKS[bmKey].compare.http3 = {
      color: COLORS.http3,
      label: 'HTTP3',
      frameworkId: BROWSERTIME_FRAMEWORK_ID,
      suite: siteKey,
      option: 'opt',
      extraOptions: [dur, 'http3'],
    };
    DEFAULT_SUITES.push(bmKey);
  });
});

export const CONFIG = {
  default: {
    landingPath: '/win10/overview?numDays=60',
    dayRange: 60, // # days
    colors: [COLORS.http3, COLORS.http2],
    labels: ['HTTP3', 'HTTP2'],
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux64-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    mac: {
      label: 'Mac OS X',
      platforms: ['macosx1014-64-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    win7: {
      label: 'Windows 7 32bit',
      platforms: ['windows7-32-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64-shippable'],
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
      newSeriesConfig.platform = pf;
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

export default {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
};
