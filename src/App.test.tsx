import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Routes from './routes';
import Header from './components/Header';

it('has a header', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Header).exists()).toBe(true);
});

it('has a footer', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('footer').exists()).toBe(true);
});

it('contains routers', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<Routes />)).toBe(true);
});
