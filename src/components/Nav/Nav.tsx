import React, { FC } from 'react';
import { useLocation } from "react-router-dom";
import { Friends, Watch, Market, Groups, HomeFill, Home, FriendsFill, WatchFill, MarketFill, GroupsFill } from '../Icons';

import NavButton from './NavButton';

import './Nav.scss';

export const NAVIGATION_ITEMS = [
  {
    key: "home",
    path: "/",
    title: "Home",
    icon: <Home />,
    iconActive: <HomeFill />
  },
  {
    key: "friends",
    path: "/friends",
    title: "Friends",
    icon: <Friends />,
    iconActive: <FriendsFill />
  },
  {
    key: "watch",
    path: "/watch",
    title: "Watch",
    icon: <Watch />,
    iconActive: <WatchFill />
  },
  {
    key: "marketplace",
    path: "/marketplace",
    title: "Marketplace",
    icon: <Market />,
    iconActive: <MarketFill />
  },
  {
    key: "groups",
    path: "/groups",
    title: "Groups",
    icon: <Groups />,
    iconActive: <GroupsFill />
  }
]

const Nav: FC = () => {
  const location = useLocation();
  return (
    <nav className="Navigation">
      {NAVIGATION_ITEMS.map(item => {
        const isActive = location.pathname === item.path;
        return <NavButton key={item.key} active={isActive} href={item.path}>
          {isActive ? item.iconActive : item.icon}
        </NavButton>
      })}
    </nav>
  );
};

export default Nav;
