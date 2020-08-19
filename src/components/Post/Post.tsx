import React, { FC } from "react";

import "./Post.scss";
import Figure from "../Figure";
import { PROFILE_PHOTO, STORY_PHOTOS } from "../../constants";
import Text from "../Text";
import { Global, More, Like, Comment, Share } from "../Icons";
import Button from "../Button";

const Post: FC = () => {
    return <div className="Post">
        <div className="Post-header">
            <Figure><img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} /></Figure>
            <div>
                <Text>Halit Ak</Text>
                <small>
                    <Text>14h</Text>
                    <span>·</span>
                    <Global />
                </small>
            </div>
            <Button figure><Figure><More /></Figure></Button>
        </div>
        <div className="Post-body">
            <div className="Post-body-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, animi.</p>
                <p>-</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <img src={STORY_PHOTOS[0].src} alt={STORY_PHOTOS[0].title} />
        </div>
        <div className="Post-footer">
            <div>
                <div className="Post-like-count">
                    <Like />
                    <Text>15</Text>
                </div>
                <div>
                    <a href="#comments">
                        <Text>7 Comments</Text>
                    </a>
                    <a href="#shares">
                        <Text>1 Shares</Text>
                    </a>
                </div>
            </div>
            <hr />
            <div className="Post-actions">
                <Button xsmall><Like /><Text bold>Like</Text></Button>
                <Button xsmall><Comment /><Text bold>Comment</Text></Button>
                <Button xsmall><Share /><Text bold>Share</Text></Button>
            </div>
        </div>
    </div>
}

export default Post;