import React from 'react';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
import Slider from '../../src/components/Slider';

// Skipping this for now as we get "TypeError: Cannot read property
// 'addEventListener' of null" as react-test-renderer doesn't work with refs
// well. https://material-ui.com/guides/migration-v3/#core
// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders correctly', () => {
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
