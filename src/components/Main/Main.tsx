import React, { FC } from "react";

import "./Main.scss";
import Sidenav from "../Sidenav";
import Story from "../Story";
import PostEditor from "../PostEditor";
import Post from "../Post";
import Group from "../Group";

import useWindowSize from "../../hooks/useWindowSize";
import CONST from "../../constants"

const Main: FC = () => {
    const size = useWindowSize()

    return <main className="Main">
        {size.width > CONST.LARGE_SIZE && <Sidenav />}
        <div className="Container">
            <Story />
            <PostEditor />
            <Post />
        </div>
        {size.width > CONST.DESKTOP_SIZE && <Group />}
    </main>
}

export default Main;