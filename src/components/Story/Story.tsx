import React, { FC } from "react";
import "./Story.scss";
import { PROFILE_PHOTO, STORY_PHOTOS } from "../../constants";
import StoryItem from "./StoryItem";

const Story: FC = () => {

    return <div className="Story">
        <StoryItem create src={PROFILE_PHOTO.src} text={PROFILE_PHOTO.title} />
        {STORY_PHOTOS.map(story => <StoryItem src={story.src} text={story.title} userSrc={PROFILE_PHOTO.src} userAlt={PROFILE_PHOTO.title} />)}
    </div>
}

export default Story;