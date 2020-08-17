import React, { FC } from "react";

import "./Main.scss";
import Sidenav from "../Sidenav";
import Story from "../Story";
import PostEditor from "../PostEditor";

const Main: FC = () => {
    return <>
        <Sidenav />
        <main className="Main">
            <Story />
            <PostEditor />
        </main>
    </>
}

export default Main;