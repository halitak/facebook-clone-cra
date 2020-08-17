import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from './routes/Routes';
import Header from './components/Header';

const App: FunctionComponent = () => (
  <div className="layout">
    <Header />
    <Routes />
    <footer>Footer</footer>
  </div>
);
export default hot(App);
