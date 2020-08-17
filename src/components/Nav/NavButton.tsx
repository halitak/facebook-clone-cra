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
    <div className={classNames}>
      <Button>{children}</Button>
    </div>
  );
};

export default NavButton;
