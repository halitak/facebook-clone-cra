import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';

const Home: FunctionComponent = () => (
  <div>
    <Sidenav />
    <h1>Home page</h1>
    <Link to="/feed">Go to feed</Link>
  </div>
);

export default Home;
