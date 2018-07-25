const BENCHMARKS = [
  'ARES6',
  'JetStream',
  'motionmark_htmlsuite',
  'motionmark_animometer',
];

const CONFIG = {
  linux64: {
    label: 'Linux 64bit',
    perfherderKey: 'linux64',
    benchmarks: BENCHMARKS,
  },
  win7: {
    label: 'Windows 7 32bit',
    perfherderKey: 'windows7-32',
    benchmarks: BENCHMARKS,
  },
  win10: {
    label: 'Windows 10 64bit',
    perfherderKey: 'windows10-64',
    benchmarks: BENCHMARKS,
  },
};

export default CONFIG;
