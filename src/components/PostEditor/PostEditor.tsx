import React, { FC } from "react";
import Button from "../Button";
import Figure from "../Figure";
import { PROFILE_PHOTO } from "../../constants";
import { Video, Photo, Smile } from "../Icons";

import "./PostEditor.scss";
import Text from "../Text";

const PostEditor: FC = () => {
    return <div className="PostEditor">
        <div className="PostEditor-body">
            <Button figure><Figure><img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} /></Figure></Button>
            <Button className="Modal-trigger">What's on your mind, Halit Ak?</Button>
        </div>
        <hr />
        <div className="PostEditor-footer">
            <Button><Video /><Text>Live Video</Text></Button>
            <Button><Photo /><Text>Photo/Video</Text></Button>
            <Button><Smile /><Text>Feeling Activity</Text></Button>
        </div>
    </div>
}

export default PostEditor;