import React, { FC } from 'react';

import './Header.scss';
import Button from '../Button';
import Figure from '../Figure';
import { Facebook } from '../Icons';
import Search from '../Search';
import Nav from '../Nav';
import Settings from '../Settings';

const Header: FC = () => {
  return (
    <header className="Header">
      <div style={{ flexShrink: 0 }}>
        <Button figure className="Logo">
          <Figure>
            <Facebook />
          </Figure>
        </Button>
        <Search />
      </div>
      <Nav />
      <Settings />
    </header>
  );
};

export default Header;
