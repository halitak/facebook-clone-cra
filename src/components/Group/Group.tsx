import React, { FC } from "react";

import "./Group.scss";
import Text from "../Text";
import Button from "../Button";
import Figure from "../Figure";
import { Plus } from "../Icons";
import Title from "../Text/Title";

const Group: FC = () => {
    return <aside className="Group">
        <Title bold secondary>Group Conversations</Title>
        <Button><Figure small><Plus /></Figure><Text bold>Create New Group</Text></Button>
    </aside>
}

export default Group;