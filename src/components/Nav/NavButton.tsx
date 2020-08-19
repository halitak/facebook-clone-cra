import React, { FC } from 'react';
import cx from 'classnames';
import LinkButton from '../Button/LinkButton';

import './NavButton.scss';

type Props = JSX.IntrinsicElements['a'] & {
  active?: boolean;
  href?: any;
};

const NavButton: FC<Props> = ({ active, children, href }) => {
  const classNames = cx('NavButton', { Active: active });
  return (
    <div className={classNames}>
      <LinkButton href={href}>{children}</LinkButton>
    </div>
  );
};

export default NavButton;
