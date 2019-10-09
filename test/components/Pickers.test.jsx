import React from 'react';
import { mount } from 'enzyme';
import 'raf/polyfill';
import Pickers from '../../src/components/Pickers';

it('renders correctly', () => {
  const wrapper = mount(
    <Pickers platform="win10" benchmark="overview" onChange={() => {}} />,
  );
  expect(wrapper).toMatchSnapshot();
});
