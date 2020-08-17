import React, { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  small?: boolean;
  big?: boolean;
  xbig?: boolean;
  figure?: boolean;
};

const Button: FC<Props> = ({ small, big, xbig, figure, className, children, onClick, ...props }) => {
  const classNames = cx(
    'Button',
    {
      'Button-small': small,
      'Button-big': big,
      'Button-xbig': xbig,
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
