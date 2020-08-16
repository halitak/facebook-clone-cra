import React, { FC } from 'react';

import './Settings.scss';
import Button from '../Button';
import * as Icons from '../Icons';
import Figure from '../Figure';

import { PROFILE_PHOTO } from '../../constants';

const Settings: FC = () => {
  return (
    <div className="Settings">
      <Button small style={{ borderRadius: '18px' }}>
        <Figure small>
          <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
        </Figure>
        <span>Halit Ak</span>
      </Button>
      <Button figure>
        <Figure>
          <Icons.Plus />
        </Figure>
      </Button>
      <Button figure>
        <Figure>
          <Icons.Messenger />
        </Figure>
      </Button>
      <Button figure>
        <Figure>
          <Icons.Notifications />
        </Figure>
      </Button>
      <Button figure>
        <Figure>
          <Icons.ArrowBottom />
        </Figure>
      </Button>
    </div>
  );
};

export default Settings;
