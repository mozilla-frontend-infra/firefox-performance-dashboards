const RAPTOR_OPT_OPTIONS = { frameworkId: 10, buildType: 'opt' };

const BENCHMARKS = {
  'motionmark-animometer': {
    compare: ['raptor-motionmark-animometer-firefox', 'raptor-motionmark-animometer-chrome'],
    label: 'MotionMark Animometer',
  },
  'motionmark-htmlsuite': {
    compare: ['raptor-motionmark-htmlsuite-firefox', 'raptor-motionmark-htmlsuite-chrome'],
    label: 'MotionMark HtmlSuite',
  },
  speedometer: {
    compare: ['raptor-speedometer-firefox', 'raptor-speedometer-chrome'],
    label: 'Speedometer',
  },
  stylebench: {
    compare: ['raptor-stylebench-firefox', 'raptor-stylebench-chrome'],
    label: 'StyleBench',
  },
  sunspider: {
    compare: ['raptor-sunspider-firefox', 'raptor-sunspider-chrome'],
    label: 'SunSpider',
  },
  webaudio: {
    compare: ['raptor-webaudio-firefox', 'raptor-webaudio-chrome'],
    label: 'WebAudio',
  },
};

const CONFIG = {
  default: {
    landingPath: 'win10/motionmark-animometer',
  },
  platforms: {
    linux64: {
      label: 'Linux 64bit',
      platform: 'linux64',
      benchmarks: BENCHMARKS,
      ...RAPTOR_OPT_OPTIONS,
    },
    mac: {
      label: 'Mac OS X',
      platform: 'osx-10-10',
      benchmarks: BENCHMARKS,
      ...RAPTOR_OPT_OPTIONS,
    },
    win7: {
      label: 'Windows 7 32bit',
      platform: 'windows7-32',
      benchmarks: BENCHMARKS,
      ...RAPTOR_OPT_OPTIONS,
    },
    win10: {
      label: 'Windows 10 64bit',
      platform: 'windows10-64',
      benchmarks: BENCHMARKS,
      ...RAPTOR_OPT_OPTIONS,
    },
  },
};

export default CONFIG;
