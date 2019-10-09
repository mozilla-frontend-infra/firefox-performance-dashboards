import React from 'react';
import { render } from '@testing-library/react';
import 'raf/polyfill';
import Pickers from '../../src/components/Pickers';

it('renders correctly', () => {
  const { asFragment } = render(
    <Pickers platform="win10" benchmark="overview" onChange={() => {}} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
