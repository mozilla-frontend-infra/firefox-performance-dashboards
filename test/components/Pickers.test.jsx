import React from 'react';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
import Pickers from '../../src/components/Pickers';

const benchmarkOptions = [
  { value: 'overview', label: 'Overview' },
  { value: 'kraken', label: 'Kraken' },
  { value: 'motionmark-animometer', label: 'MotionMark Animometer' },
  { value: 'motionmark-htmlsuite', label: 'MotionMark HtmlSuite' },
  { value: 'speedometer', label: 'Speedometer' },
  { value: 'stylebench', label: 'StyleBench' },
  { value: 'sunspider', label: 'SunSpider' },
  { value: 'webaudio', label: 'WebAudio' },
];

const platformOptions = [
  { value: 'linux64', label: 'Linux 64bit' },
  { value: 'mac', label: 'Mac OS X' },
  { value: 'win7', label: 'Windows 7 32bit' },
  { value: 'win10', label: 'Windows 10 64bit' },
  { value: 'android', label: 'Android' },
];

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Pickers
        platform="win10"
        benchmark="overview"
        onChange={() => {}}
        benchmarkOptions={benchmarkOptions}
        platformOptions={platformOptions}
      />
    ))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
