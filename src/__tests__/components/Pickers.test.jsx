import React from 'react';
import { render } from '@testing-library/react';
import 'raf/polyfill';
import Pickers from '../../components/Pickers';
import { CONFIG } from '../../config';

// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders correctly', () => {
  const { asFragment } = render(
    <Pickers
      platform="win11"
      benchmark="overview"
      category="benchmarks"
      dayRange={60}
      resultsBenchmarks={CONFIG.views.win11.categories.benchmarks.suites}
      onChange={() => {}}
      labels={['Firefox']}
      selectedLabels={['Firefox']}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
