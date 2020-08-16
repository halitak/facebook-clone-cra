import React, { FC } from 'react';

import NavButton from './NavButton';
import { Friends, Watch, Market, Groups, HomeFill } from '../Icons';

import './Nav.scss';

const Nav: FC = () => {
  return (
    <nav className="Navigation">
      <NavButton active>
        <HomeFill />
      </NavButton>
      <NavButton>
        <Friends />
      </NavButton>
      <NavButton>
        <Watch />
      </NavButton>
      <NavButton>
        <Market />
      </NavButton>
      <NavButton>
        <Groups />
      </NavButton>
    </nav>
  );
};

export default Nav;
