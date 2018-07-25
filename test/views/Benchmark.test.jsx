import React from 'react';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
import Benchmark from '../../src/views/Benchmark';

it('renders correctly', () => {
  const tree = renderer
    .create(<Benchmark />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
