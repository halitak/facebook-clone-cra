import React, { FC } from 'react';
import cx from 'classnames';

import './Text.scss';

type Props = JSX.IntrinsicElements['h3'] & {
    bold?: boolean;
    center?: boolean;
    secondary?: boolean;
};

const Title: FC<Props> = ({ bold, center, secondary, className, children }) => {
    const classNames = cx("Title", { "Bold": bold, "Center": center, "Secondary": secondary }, className);
    return <h3 className={classNames}>{children}</h3>;
};

export default Title;
