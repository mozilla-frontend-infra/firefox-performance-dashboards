import { ALT_PROJECT } from './utils/perfherder';
import { queryInfoGen } from './config-utils';

/* eslint-disable no-unused-vars */
const AWSY_FRAMEWORK_ID = 4;

const COLORS = {
  chromium: '#4285F4',
  firefox: '#e55525',
  'firefox-webrender': '#e5ca0f',
  'firefox-fission': '#92110c',
};

export const BENCHMARKS = {
  'Base Content Explicit': {
    compare: {
      'base-content-explicit-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Explicit',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'base-content-explicit-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Explicit',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content Explicit',
    yLabel: 'Bytes',
  },
  'Base Content Heap Unclassified': {
    compare: {
      'base-content-heap-unclassified-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Heap Unclassified',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'base-content-heap-unclassified-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Heap Unclassified',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content Heap Unclassified',
    yLabel: 'Bytes',
  },
  'Base Content JS': {
    compare: {
      'base-content-js-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content JS',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'base-content-js-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content JS',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content JS',
    yLabel: 'Bytes',
  },
  'Base Content Resident Unique Memory': {
    compare: {
      'base-content-unique-resident-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Resident Unique Memory',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'base-content-unique-resident-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Base Content Resident Unique Memory',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Base Content Resident Unique Memory',
    yLabel: 'Bytes',
  },
  'Explicit Memory': {
    compare: {
      'explicit-memory-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'explicit-memory-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Explicit Memory',
    yLabel: 'Bytes',
  },
  'Heap Unclassified': {
    compare: {
      'heap-unclassified-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'heap-unclassified-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        project: ALT_PROJECT,
        platformSuffix: '-qr',
        option: 'opt',
      },
    },
    label: 'Heap Unclassified',
    yLabel: 'Bytes',
  },
  Images: {
    compare: {
      'images-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'images-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Images',
    yLabel: 'Bytes',
  },
  JS: {
    compare: {
      'js-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'js-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'JS',
    yLabel: 'Bytes',
  },
  'Resident Memory': {
    compare: {
      'resident-memory-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'resident-memory-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    label: 'Resident Memory',
    yLabel: 'Bytes',
  },
  'Explicit Memory Tp6': {
    compare: {
      'explicit-memory-tp6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'explicit-memory-tp6-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'explicit-memory-tp6-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Explicit Memory',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'tp6'],
      },
    },
    label: 'Explicit Memory Tp6',
    yLabel: 'Bytes',
  },
  'Heap Unclassified Tp6': {
    compare: {
      'heap-unclassified-tp6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'heap-unclassified-tp6-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'heap-unclassified-tp6-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Heap Unclassified',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'tp6'],
      },
    },
    label: 'Heap Unclassified Tp6',
    yLabel: 'Bytes',
  },
  'Images Tp6': {
    compare: {
      'images-tp6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'images-tp6-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'images-tp6-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Images',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'tp6'],
      },
    },
    label: 'Images Tp6',
    yLabel: 'Bytes',
  },
  'JS Tp6': {
    compare: {
      'js-tp6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'js-tp6-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'js-tp6-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'JS',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'tp6'],
      },
    },
    label: 'JS Tp6',
    yLabel: 'Bytes',
  },
  'Resident Memory Tp6': {
    compare: {
      'resident-memory-tp6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'resident-memory-tp6-firefox-webrender': {
        color: COLORS['firefox-webrender'],
        label: 'Firefox-Webrender',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        platformSuffix: '-qr',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['tp6'],
      },
      'resident-memory-tp6-firefox-fission': {
        color: COLORS['firefox-fission'],
        label: 'Firefox-Fission',
        frameworkId: AWSY_FRAMEWORK_ID,
        suite: 'Resident Memory',
        platformSuffix: '-qr',
        option: 'opt',
        extraOptions: ['fission', 'tp6'],
      },
    },
    label: 'Resident Memory Tp6',
    yLabel: 'Bytes',
  },
};

export const DEFAULT_CATEGORIES = {
  memory: {
    suites: [
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
    ],
    label: 'Memory',
  },
};

export const CONFIG = {
  default: {
    landingPath: '/win10/memory/overview?numDays=60',
    dayRange: 60, // # days
    colors: [COLORS.firefox, COLORS.chromium],
    labels: ['Firefox', 'Chromium'],
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux1804-64-shippable'],
      categories: DEFAULT_CATEGORIES,
    },
    mac: {
      label: 'Mac OS X',
      platforms: ['macosx1015-64-shippable'],
      categories: DEFAULT_CATEGORIES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64-shippable'],
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
