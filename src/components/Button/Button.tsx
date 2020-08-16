import React, { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  small?: boolean;
  figure?: boolean;
};

const Button: FC<Props> = ({ small, figure, className, children, onClick, ...props }) => {
  const classNames = cx(
    'Button',
    {
      'Button-small': small,
      'Button-figure': figure,
    },
    className,
  );

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
