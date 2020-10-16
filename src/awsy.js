import { ALT_PROJECT } from './utils/perfherder';

/* eslint-disable no-unused-vars */
const AWSY_FRAMEWORK_ID = 4;

const COLORS = {
  chromium: '#4285F4',
  firefox: '#e55525',
};

export const BENCHMARKS = {
  'Base Content Explicit': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Explicit',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content Explicit',
    yLabel: 'Bytes',
  },
  'Base Content Heap Unclassified': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Heap Unclassified',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content Heap Unclassified',
    yLabel: 'Bytes',
  },
  'Base Content JS': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content JS',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content JS',
    yLabel: 'Bytes',
  },
  'Base Content Resident Unique Memory': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Resident Unique Memory',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content Resident Unique Memory',
    yLabel: 'Bytes',
  },
  'Explicit Memory': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Explicit Memory',
    yLabel: 'Bytes',
  },
  'Heap Unclassified': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Heap Unclassified',
    yLabel: 'Bytes',
  },
  Images: {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Images',
    yLabel: 'Bytes',
  },
  JS: {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'JS',
    yLabel: 'Bytes',
  },
  'Resident Memory': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Resident Memory',
    yLabel: 'Bytes',
  },
  'Explicit Memory Tp6': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
    },
    label: 'Explicit Memory Tp6',
    yLabel: 'Bytes',
  },
  'Heap Unclassified Tp6': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
    },
    label: 'Heap Unclassified Tp6',
    yLabel: 'Bytes',
  },
  'Images Tp6': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
    },
    label: 'Images Tp6',
    yLabel: 'Bytes',
  },
  'JS Tp6': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
    },
    label: 'JS Tp6',
    yLabel: 'Bytes',
  },
  'Resident Memory Tp6': {
    compare: {
      foo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
    },
    label: 'Resident Memory Tp6',
    yLabel: 'Bytes',
  },
};

const DEFAULT_SUITES = [
  'Base Content Explicit',
  'Base Content Heap Unclassified',
  'Base Content JS',
  'Base Content Resident Unique Memory',
  'Explicit Memory',
  'Heap Unclassified',
  'Images',
  'JS',
  'Resident Memory',
  'Explicit Memory Tp6',
  'Heap Unclassified Tp6',
  'Images Tp6',
  'JS Tp6',
  'Resident Memory Tp6',
];

export const CONFIG = {
  default: {
    landingPath: '/win10/overview?numDays=60',
    dayRange: 60, // # days
    colors: [COLORS.firefox, COLORS.chromium],
    labels: ['Firefox', 'Chromium'],
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux1804-64-shippable'],
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
    win10Qr: {
      label: 'Windows 10 64bit Qr',
      platforms: ['windows10-64-shippable-qr'],
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

export default {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
};
