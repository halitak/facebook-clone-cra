import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('renders corretly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
