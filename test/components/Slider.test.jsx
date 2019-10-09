import React from 'react';
import { mount } from 'enzyme';
import 'raf/polyfill';
import Slider from '../../src/components/Slider';

it('renders correctly', () => {
  const wrapper = mount(
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
  expect(wrapper).toMatchSnapshot();
});
