import React, { FC } from 'react';

import './Sidenav.scss';
import { PROFILE_PHOTO, SIDENAV_PHOTOS } from '../../constants';
import Button from '../Button';
import Figure from '../Figure';
import Text from '../Text';
import { ArrowBottom } from '../Icons';

const Sidenav: FC = () => {
  return (
    <aside className="Sidenav">
      <Button big>
        <Figure small>
          <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
        </Figure>
        <Text bold>Halit Ak</Text>
      </Button>
      {SIDENAV_PHOTOS.map((image) => (
        <Button big>
          <Figure small transparent>
            <img src={image.src} alt={image.title} />
          </Figure>
          <Text bold>{image.title}</Text>
        </Button>
      ))}
      <Button big>
        <Figure small>
          <ArrowBottom />
        </Figure>
        <Text bold>See More</Text>
      </Button>
    </aside>
  );
};

export default Sidenav;
