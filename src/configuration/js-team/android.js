import SETTINGS from '../perfherderSettings';

const { frameworkIds } = SETTINGS;

const AndroidConfig = {
  label: 'Android',
  benchmarks: {
    speedometer: {
      label: 'Speedometer',
      compare: [
        {
          color: '#e55525',
          label: 'Moto G5 (arm7)',
          frameworkId: frameworkIds.raptor,
          project: 'mozilla-central',
          platform: 'android-hw-g5-7-0-arm7-api-16',
          suite: 'raptor-speedometer-geckoview',
          buildType: 'opt',
        },
        {
          color: '#ffcd02',
          label: 'Pixel 2 (arm7)',
          frameworkId: frameworkIds.raptor,
          project: 'mozilla-central',
          platform: 'android-hw-p2-8-0-arm7-api-16',
          suite: 'raptor-speedometer-geckoview',
          buildType: 'opt',
        },
        {
          color: '#ffcd02',
          label: 'Pixel 2 (ARM64)',
          frameworkId: frameworkIds.raptor,
          project: 'mozilla-central',
          platform: 'android-hw-p2-8-0-android-aarch64',
          suite: 'raptor-speedometer-geckoview',
          buildType: 'opt',
        },
      ],
    },
  },
};

export default AndroidConfig;
