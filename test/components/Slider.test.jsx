import React from 'react';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
import Slider from '../../src/components/Slider';

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Slider
        identifier="test"
        label="Test"
        searchParam="test"
        selectedValue={15}
        options={{ min: 10, max: 30, step: 5 }}
        onChangeUpdateTooltipFunc={() => ('test')}
        handleSliderChange={() => {}}
      />
    ))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
