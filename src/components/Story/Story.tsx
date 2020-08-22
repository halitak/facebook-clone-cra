import React, { FC } from "react";
import "./Story.scss";
import CONST, { PROFILE_PHOTO, STORY_PHOTOS } from "../../constants";
import StoryItem from "./StoryItem";
import useWindowSize from "../../hooks/useWindowSize";

const Story: FC = () => {
    const size = useWindowSize();
    const isFilter = (size.width > CONST.LARGE_SIZE && size.width < CONST.XLARGE_SIZE)
        || (size.width < CONST.TABLET_SIZE)
    const photos = isFilter ? STORY_PHOTOS.filter((item, i) => {
        return STORY_PHOTOS.length - 1 !== i
    }) : STORY_PHOTOS;

    return <div className="Story">
        <StoryItem create src={PROFILE_PHOTO.src} text={PROFILE_PHOTO.title} />
        {photos.map(story => <StoryItem src={story.src} text={story.title} userSrc={PROFILE_PHOTO.src} userAlt={PROFILE_PHOTO.title} />)}
    </div>
}

export default Story;