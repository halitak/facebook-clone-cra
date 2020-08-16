import covid from '../img/covid.png';
import friends from '../img/friends.png';
import mesenger from '../img/mesenger.png';
import pages from '../img/pages.png';
import market from '../img/market.png';
import videos from '../img/videos.png';
import activity from '../img/activity.png';
import groups from '../img/groups.png';
import donations from '../img/donations.png';
import pp from '../img/kuzuryusen.jpg';

interface PHOTO {
  src: string;
  title: string;
}

export const PROFILE_PHOTO: PHOTO = {
  src: pp,
  title: 'Halit Ak',
};

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
    src: mesenger,
    title: 'Mesenger',
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
