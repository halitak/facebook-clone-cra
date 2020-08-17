import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../components/Main/Main';

const Home: FunctionComponent = () => (
  <>
    <Main />
    <Link to="/feed">Go to feed</Link>
  </>
);

export default Home;
