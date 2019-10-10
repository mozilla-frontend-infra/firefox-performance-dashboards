import React from 'react';
import { render } from '@testing-library/react';
import 'raf/polyfill';
import Slider from '../../src/components/Slider';

it('renders correctly', () => {
  const { asFragment } = render(
    <Slider
      identifier="test"
      label="Test"
      searchParam="test"
      selectedValue={15}
      options={{ min: 10, max: 30, step: 5 }}
      onChangeUpdateTooltipFunc={() => 'test'}
      handleSliderChange={() => {}}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
