import React, { FC } from 'react';
import cx from 'classnames';

import './Figure.scss';

type Props = JSX.IntrinsicElements['div'] & {
  small?: boolean;
  big?: boolean;
  transparent?: boolean;
};

const Figure: FC<Props> = ({ small, big, transparent, className, children }) => {
  const classNames = cx(
    'Figure',
    { 'Figure-small': small, 'Figure-big': big, 'Figure-transparent': transparent },
    className,
  );

  return <figure className={classNames}>{children}</figure>;
};

export default Figure;
