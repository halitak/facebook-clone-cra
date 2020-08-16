import React, { FC } from 'react';
import cx from 'classnames';

import './Text.scss';

type Props = JSX.IntrinsicElements['span'] & {
  bold?: boolean;
};

const Text: FC<Props> = ({ bold, children }) => {
  const classNames = cx({ Bold: bold });
  return <span className={classNames}>{children}</span>;
};

export default Text;
