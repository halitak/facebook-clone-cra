import React from "react";
import { storiesOf } from "@storybook/react";
import { PROFILE_PHOTO, STORY_PHOTOS } from "../../constants";

import StoryItem from "./StoryItem";
import Story from "./Story";

storiesOf("Story", module)
    .add("Create Story", () => <StoryItem create src={PROFILE_PHOTO.src} />)
    .add("Story", () => <StoryItem src={STORY_PHOTOS[0].src} text={STORY_PHOTOS[0].title} userSrc={PROFILE_PHOTO.src} userAlt={PROFILE_PHOTO.title} />)
    .add("Story Container", () => <Story />)