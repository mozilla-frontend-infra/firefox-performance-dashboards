import React from 'react';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
// Importing without withRouter()
import { Benchmark } from '../../src/views/Benchmark';

it('renders correctly', () => {
  const tree = renderer
    .create(<Benchmark />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
