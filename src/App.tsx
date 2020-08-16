import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from './routes/Routes';
import Header from './components/Header';

const App: FunctionComponent = () => (
  <>
    <Header />
    <Routes />
    <footer>Footer</footer>
  </>
);
export default hot(App);
