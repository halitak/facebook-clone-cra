import React, { FC } from 'react';
import { useLocation } from "react-router-dom";
import { Friends, Watch, Market, Groups, HomeFill, Home, FriendsFill, WatchFill, MarketFill, GroupsFill, Menu } from '../Icons';

import NavButton from './NavButton';

import './Nav.scss';
import useWindowSize from '../../hooks/useWindowSize';
import CONST from "../../constants/index";

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
  },
  {
    key: "bookmarks",
    path: "/bookmarks",
    title: "Bookmarks",
    icon: <Menu />,
    iconActive: <Menu />
  }
]

const Nav: FC = () => {
  const location = useLocation();
  const size = useWindowSize();
  const isTablet = size.width > CONST.TABLET_SIZE;
  const isLarge = size.width > CONST.LARGE_SIZE;
  const items = NAVIGATION_ITEMS.filter(item => {
    return isLarge ? item.key !== "bookmarks" && item :
      isTablet ? item.key !== "groups" && item :
        item.key === "bookmarks"
  })
  return (
    <nav className="Navigation">
      {items.map(item => {
        const isActive = location.pathname === item.path;
        return <NavButton key={item.key} active={isActive} href={item.path}>
          {isActive ? item.iconActive : item.icon}
        </NavButton>
      })}
    </nav>
  );
};

export default Nav;
