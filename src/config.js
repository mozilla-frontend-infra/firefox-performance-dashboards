const RAPTOR_OPT_OPTIONS = { frameworkId: 10, buildType: 'opt', extraOptions: [] };
const RAPTOR_PGO_OPTIONS = { frameworkId: 10, buildType: 'pgo', extraOptions: [] };

const BENCHMARKS = {
  'raptor-motionmark-animometer-firefox': {
    label: 'MotionMark Animometer',
  },
  'raptor-motionmark-htmlsuite-firefox': {
    label: 'MotionMark HtmlSuite',
  },
  'raptor-speedometer-firefox': {
    label: 'Speedometer',
  },
  'raptor-stylebench-firefox': {
    label: 'StyleBench',
  },
  'raptor-sunspider-firefox': {
    label: 'SunSpider',
  },
  'raptor-webaudio-firefox': {
    label: 'WebAudio',
  },
};

const CONFIG = {
  linux64: {
    label: 'Linux 64bit',
    perfherderKey: 'linux64',
    benchmarks: BENCHMARKS,
    options: RAPTOR_PGO_OPTIONS,
  },
  mac: {
    label: 'Mac OS X',
    perfherderKey: 'osx-10-10',
    benchmarks: BENCHMARKS,
    options: RAPTOR_OPT_OPTIONS,
  },
  win7: {
    label: 'Windows 7 32bit',
    perfherderKey: 'windows7-32',
    benchmarks: BENCHMARKS,
    options: RAPTOR_PGO_OPTIONS,
  },
  win10: {
    label: 'Windows 10 64bit',
    perfherderKey: 'windows10-64',
    benchmarks: BENCHMARKS,
    options: RAPTOR_PGO_OPTIONS,
  },
};

export default CONFIG;
