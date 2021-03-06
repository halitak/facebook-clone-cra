import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import Figure from '../Figure';
import { Close } from '../Icons';
import { PROFILE_PHOTO } from '../../constants';

storiesOf('Button', module)
  .add('Normal', () => <div className="h-stack">
    <Button small>Small Button</Button>
    <Button>Normal Button</Button>
    <Button big>Big Button</Button>
    <Button xbig>Bigger Button</Button>
  </div>)
  .add('Figure', () => (
    <div className="h-stack">
      <Button figure>
        <Figure small>
          <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
        </Figure>
      </Button>
      <Button figure>
        <Figure>
          <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
        </Figure>
      </Button>
      <Button figure>
        <Figure big>
          <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
        </Figure>
      </Button>
      <Button figure>
        <Figure small>
          <Close />
        </Figure>
      </Button>
      <Button figure>
        <Figure>
          <Close />
        </Figure>
      </Button>
      <Button figure>
        <Figure big>
          <Close />
        </Figure>
      </Button>
    </div>
  ));
