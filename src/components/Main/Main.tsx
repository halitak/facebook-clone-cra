import React, { FC } from "react";

import "./Main.scss";
import Sidenav from "../Sidenav";
import Story from "../Story";
import PostEditor from "../PostEditor";
import Post from "../Post";
import Group from "../Group";

const Main: FC = () => {
    return <main className="Main">
        <Sidenav />
        <div className="Container">
            <Story />
            <PostEditor />
            <Post />
        </div>
        <Group />
    </main>
}

export default Main;