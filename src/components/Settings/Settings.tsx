import React, { FC } from 'react';

import './Settings.scss';
import Button from '../Button';
import * as Icons from '../Icons';
import Figure from '../Figure';

import CONST, { PROFILE_PHOTO } from '../../constants';
import Text from '../Text';
import useWindowSize from '../../hooks/useWindowSize';

const Settings: FC = () => {
  const size = useWindowSize();
  return (
    <div className="Settings">
      {size.width > CONST.XLARGE_SIZE && <Button small style={{ borderRadius: '18px' }}>
        <Figure small>
          <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
        </Figure>
        <Text bold>Halit Ak</Text>
      </Button>}
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
