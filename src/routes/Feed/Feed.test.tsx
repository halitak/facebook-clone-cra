import React from 'react';
import { shallow } from 'enzyme';
import Feed from './Feed';

it('render correctly', () => {
  const wrapper = shallow(<Feed />);
  expect(wrapper).toMatchSnapshot();
});
