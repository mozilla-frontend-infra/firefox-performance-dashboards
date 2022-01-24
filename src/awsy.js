import { ALT_PROJECT } from './utils/perfherder';
import { queryInfoGen } from './config-utils';

const AWSY_FRAMEWORK_ID = 4;

const PALETTE = {
  red: '#dc4c4e',
  orange: '#FFA056',
};

const DESKTOP_FIREFOX_APPS = {
  firefox: {
    name: 'firefox',
    label: 'Firefox',
    color: PALETTE.orange,
    project: ALT_PROJECT,
  },
};

const AWSY_TESTS = {
  'Base Content Explicit': {},
  'Base Content Heap Unclassified': {},
  'Base Content JS': {},
  'Base Content Resident Unique Memory': {},
  'Explicit Memory': { extraOptions: ['tp6'] },
  'Heap Unclassified': { extraOptions: ['tp6'] },
  Images: { extraOptions: ['tp6'] },
  JS: { extraOptions: ['tp6'] },
  'Resident Memory': { extraOptions: ['tp6'] },
};

export const BENCHMARKS = {};
Object.entries(AWSY_TESTS).forEach(([testKey, test]) => {
  const docUrl = `https://firefox-source-docs.mozilla.org/testing/perfdocs/awsy.html#${testKey.toLowerCase().replace(/[_\s]/g, '-')}`;
  BENCHMARKS[testKey] = {
    compare: {},
    label: test.label || testKey,
    yLabel: 'Bytes',
    docUrl,
  };
  Object.entries(DESKTOP_FIREFOX_APPS).forEach(([appKey, app]) => {
    BENCHMARKS[testKey].compare[appKey] = {
      color: app.color,
      label: app.label,
      frameworkId: AWSY_FRAMEWORK_ID,
      suite: testKey,
      platformSuffix: app.platformSuffix,
      project: app.project,
      option: 'opt',
    };
    if (Array.isArray(test.extraOptions)) {
      if (Array.isArray(BENCHMARKS[testKey].compare[appKey].extraOptions)) {
        BENCHMARKS[testKey].compare[appKey].extraOptions.push(...test.extraOptions);
      } else {
        BENCHMARKS[testKey].compare[appKey].extraOptions = test.extraOptions.slice();
      }
    }
    if (Array.isArray(app.extraOptions)) {
      if (Array.isArray(BENCHMARKS[testKey].compare[appKey].extraOptions)) {
        BENCHMARKS[testKey].compare[appKey].extraOptions.push(...app.extraOptions);
      } else {
        BENCHMARKS[testKey].compare[appKey].extraOptions = app.extraOptions.slice();
      }
    }
  });
});

export const DEFAULT_CATEGORIES = {
  memory: {
    suites: Object.keys(BENCHMARKS),
    label: 'Memory',
  },
};

export const CONFIG = {
  default: {
    landingPath: '/win10/memory/overview?numDays=60',
    dayRange: 60, // # days
    colors: [PALETTE.orange],
    labels: ['Firefox'],
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux1804-64-shippable-qr'],
      categories: DEFAULT_CATEGORIES,
    },
    mac: {
      label: 'macOS 10.15 "Catalina"',
      platforms: ['macosx1015-64-shippable-qr'],
      categories: DEFAULT_CATEGORIES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64-shippable-qr', 'windows10-64-2004-shippable-qr'],
      categories: DEFAULT_CATEGORIES,
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
