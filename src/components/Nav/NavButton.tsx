import React, { FC } from 'react';
import cx from 'classnames';
import Button from '../Button';

import './NavButton.scss';

type Props = JSX.IntrinsicElements['button'] & {
  active?: boolean;
};

const NavButton: FC<Props> = ({ active, children }) => {
  const classNames = cx('NavButton', { Active: active });
  return (
    <Button className={classNames}>
      <div>{children}</div>
    </Button>
  );
};

export default NavButton;
