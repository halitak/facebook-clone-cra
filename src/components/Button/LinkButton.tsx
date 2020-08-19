import React, { FC } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

type Props = JSX.IntrinsicElements['a'] & {
  xsmall?: boolean;
  small?: boolean;
  big?: boolean;
  xbig?: boolean;
  figure?: boolean;
  href?: any;
};

const LinkButton: FC<Props> = ({ xsmall, small, big, xbig, figure, href, className, children }) => {
  const link = href ? true : false;
  const classNames = cx(
    'Button',
    {
      "Button-link": link,
      'Button-xsmall': xsmall,
      'Button-small': small,
      'Button-big': big,
      'Button-xbig': xbig,
      'Button-figure': figure,
    },
    className,
  );

  return (
    <Link to={href} className={classNames}>
      {children}
    </Link>
  );
};

export default LinkButton;
