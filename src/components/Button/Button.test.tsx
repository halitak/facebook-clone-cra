import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders correctly normal button', () => {
  const wrapper = shallow(<Button>Normal Button</Button>);
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly small button', () => {
  const wrapper = shallow(<Button small>Small Button</Button>);
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly small button', () => {
  const wrapper = shallow(<Button figure>Figure Button</Button>);
  expect(wrapper).toMatchSnapshot();
});
