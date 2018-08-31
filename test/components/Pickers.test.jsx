import React from 'react';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
import Pickers from '../../src/components/Pickers';

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Pickers
        platform="win10"
        benchmark="overview"
        onChange={() => {}}
      />
    ))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
