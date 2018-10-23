import Linux64 from './linux64';
import MacConfig from './macOS';
import Win7Config from './win7';
import Win10Config from './win10';
import AndroidConfig from './android';

const platforms = {
  linux64: {
    label: 'Linux 64bit',
    platform: 'linux64',
    benchmarks: Linux64.benchmarks,
  },
  mac: {
    label: 'Mac OS X',
    platform: 'osx-10-10',
    benchmarks: MacConfig.benchmarks,
  },
  win7: {
    label: 'Windows 7 32bit',
    platform: 'windows7-32',
    benchmarks: Win7Config.benchmarks,
  },
  win10: {
    label: 'Windows 10 64bit',
    platform: 'windows10-64',
    benchmarks: Win10Config.benchmarks,
  },
  android: {
    label: 'Android',
    platform: 'android', // three diff platforms in android
    benchmarks: AndroidConfig.benchmarks,
  },
};

export default platforms;
