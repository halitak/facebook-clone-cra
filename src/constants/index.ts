import covid from '../img/covid.png';
import friends from '../img/friends.png';
import messenger from '../img/mesenger.png';
import pages from '../img/pages.png';
import market from '../img/market.png';
import videos from '../img/videos.png';
import activity from '../img/activity.png';
import groups from '../img/groups.png';
import donations from '../img/donations.png';
import pp from '../img/kuzuryusen.jpg';
import story1 from '../img/story1.jpg';
import story2 from '../img/story2.jpg';
import story3 from '../img/story3.jpg';
import story4 from '../img/story4.jpg';


interface PHOTO {
  src: string;
  title: string;
}

export const PROFILE_PHOTO: PHOTO = {
  src: pp,
  title: 'Halit Ak'
};

export const STORY_PHOTOS: PHOTO[] = [{
  src: story1,
  title: "Story 1"
}, {
  src: story2,
  title: "Story 2"
}, {
  src: story3,
  title: "Story 3"
}, {
  src: story4,
  title: "Story 4"
}]

export const SIDENAV_PHOTOS: PHOTO[] = [
  {
    src: covid,
    title: 'COVID-19 Information Center',
  },
  {
    src: friends,
    title: 'Friends',
  },
  {
    src: messenger,
    title: 'Messenger',
  },
  {
    src: pages,
    title: 'Pages',
  },
  {
    src: market,
    title: 'Marketplace',
  },
  {
    src: videos,
    title: 'Videos',
  },
  {
    src: activity,
    title: 'Events',
  },
  {
    src: groups,
    title: 'Groups',
  },
  {
    src: donations,
    title: 'Fundraisers',
  },
];

