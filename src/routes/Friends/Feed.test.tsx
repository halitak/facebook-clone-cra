import React from 'react';
import { shallow } from 'enzyme';
import Friends from './Friends';

it('render correctly', () => {
  const wrapper = shallow(<Friends />);
  expect(wrapper).toMatchSnapshot();
});
