import { SETTINGS } from '../appDefaults';

const { RAPTOR_FRAMEWORK_ID } = SETTINGS.frameworks;

const ANDROID_CONFIG = {
  label: 'Android', // This is used for the title of the page
  benchmarks: {
    speedometer: {
      label: 'Speedometer', // This is the title for the graph
      compare: [ // I have changed this to an array
        {
          color: '#e55525',
          label: 'Moto G5 (arm7)',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          project: 'mozilla-central', // This is new
          platform: 'android-hw-g5-7-0-arm7-api-16', // This is new
          suite: 'raptor-speedometer-geckoview',
          buildType: 'opt',
        },
        {
          color: '#ffcd02',
          label: 'Pixel 2 (arm7)',
          frameworkId: RAPTOR_FRAMEWORK_ID,
          project: 'mozilla-central', // This is new
          platform: 'android-hw-p2-8-0-arm7-api-16', // This is new
          suite: 'raptor-speedometer-geckoview',
          buildType: 'opt',
        },
      ],
    },
  },
};

export default ANDROID_CONFIG;
