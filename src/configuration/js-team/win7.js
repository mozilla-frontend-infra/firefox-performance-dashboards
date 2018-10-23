import SETTINGS from '../perfherderSettings';

const { frameworkIds } = SETTINGS;

const Win7Config = {
  label: 'Windows 7 32bit',
  benchmarks: {
    kraken: {
      compare: {
        kraken: {
          color: '#e55525',
          label: 'Firefox',
          frameworkId: frameworkIds.talos,
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
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-motionmark-animometer-firefox',
          buildType: 'opt',
        },
        'raptor-motionmark-animometer-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
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
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-motionmark-htmlsuite-firefox',
          buildType: 'opt',
        },
        'raptor-motionmark-htmlsuite-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
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
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-speedometer-firefox',
          buildType: 'opt',
        },
        'raptor-speedometer-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
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
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-stylebench-firefox',
          buildType: 'opt',
        },
        'raptor-stylebench-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
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
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-sunspider-firefox',
          buildType: 'opt',
        },
        'raptor-sunspider-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
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
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-webaudio-firefox',
          buildType: 'opt',
        },
        'raptor-webaudio-chrome': {
          color: '#ffcd02',
          label: 'Chrome',
          frameworkId: frameworkIds.raptor,
          suite: 'raptor-webaudio-chrome',
          buildType: 'opt',
        },
      },
      label: 'WebAudio',
    },
  },
};

export default Win7Config;
