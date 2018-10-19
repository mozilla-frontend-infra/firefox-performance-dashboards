import { SETTINGS } from '../appDefaults';

const { TALOS_FRAMEWORK_ID, RAPTOR_FRAMEWORK_ID } = SETTINGS.frameworks;

const MAC_CONFIG = {
  label: 'Mac OS X',
  benchmarks: {
    kraken: {
      compare: {
        kraken: {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: TALOS_FRAMEWORK_ID,
          suite: 'kraken',
          buildType: 'opt',
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
          buildType: 'opt',
        },
        'raptor-motionmark-animometer-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          suite: 'raptor-motionmark-animometer-chrome',
          buildType: 'opt',
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
          buildType: 'opt',
        },
        'raptor-motionmark-htmlsuite-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          suite: 'raptor-motionmark-htmlsuite-chrome',
          buildType: 'opt',
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
          buildType: 'opt',
        },
        'raptor-speedometer-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          suite: 'raptor-speedometer-chrome',
          buildType: 'opt',
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
          buildType: 'opt',
        },
        'raptor-stylebench-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          suite: 'raptor-stylebench-chrome',
          buildType: 'opt',
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
          buildType: 'opt',
        },
        'raptor-sunspider-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          suite: 'raptor-sunspider-chrome',
          buildType: 'opt',
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
          buildType: 'opt',
        },
        'raptor-webaudio-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          suite: 'raptor-webaudio-chrome',
          buildType: 'opt',
        },
      },
      label: 'WebAudio',
    },
  },
};

export default MAC_CONFIG;
