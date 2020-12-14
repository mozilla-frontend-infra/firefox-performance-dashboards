import { queryInfoGen } from './config-utils';

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

export const DEFAULT_SUITES = [
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

// Upper limit for the time range slider measured in days
export const TIMERANGE_UPPER_LIMIT = 365;

// Given a view configuration return a data structure with the data
// structure needed to query Treeherder
export const queryInfo = (viewConfig, benchmark, category) => queryInfoGen(BENCHMARKS, viewConfig,
  benchmark, category);

export default {
  queryInfo, BENCHMARKS, TIMERANGE_UPPER_LIMIT,
};
