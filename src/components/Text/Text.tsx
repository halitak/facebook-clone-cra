import React, { FC } from 'react';
import cx from 'classnames';

import './Text.scss';

type Props = JSX.IntrinsicElements['span'] & {
  bold?: boolean;
  center?: boolean;
  secondary?: boolean;
};

const Text: FC<Props> = ({ bold, center, secondary, className, children }) => {
  const classNames = cx({ "Bold": bold, "Center": center, "Secondary": secondary }, className);
  return <span className={classNames}>{children}</span>;
};

export default Text;
