import React, { FC } from "react";
import Text from "../Text";
import Figure from "../Figure";
import { Plus } from "../Icons";
import cx from "classnames";

import "./StoryItem.scss";

type Props = JSX.IntrinsicElements["div"] & {
    create?: boolean;
    src?: string
    text?: string
    userSrc?: string
    userAlt?: string
}

const StoryItem: FC<Props> = ({ create, src, text, userSrc, userAlt }) => {
    const classNames = cx("Story-item", { "Story-create": create });

    return <div className={classNames}>

        <img src={src} alt={text} className="Story-img" />

        <Text className="Story-text" bold center>{create ? "Create a Story" : text}</Text>

        <Figure className="Story-figure">{create ? <Plus style={{ fontSize: 24 }} /> : <img src={userSrc} alt={userAlt} />}</Figure>

        {!create && <div className="Story-overlay"></div>}

    </div>
}

export default StoryItem;