import React from 'react';
import { render } from '@testing-library/react';
import 'raf/polyfill';
import Pickers from '../../src/components/Pickers';
import { CONFIG } from '../../src/config';

it('renders correctly', () => {
  const { asFragment } = render(
    <Pickers
      platform="win10"
      benchmark="overview"
      category="benchmarks"
      dayRange={60}
      resultsBenchmarks={CONFIG.views.win10.categories.benchmarks.suites}
      onChange={() => {}}
      labels={['Firefox']}
      selectedLabels={['Firefox']}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
