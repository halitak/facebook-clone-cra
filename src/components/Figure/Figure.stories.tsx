import React from 'react';
import { storiesOf } from '@storybook/react';

import Figure from './Figure';
import { Close } from '../Icons';
import { PROFILE_PHOTO } from '../../constants';

storiesOf('Figures', module)
  .add('Image', () => (
    <div className="h-stack">
      <Figure small>
        <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
      </Figure>
      <Figure>
        <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
      </Figure>
      <Figure big>
        <img src={PROFILE_PHOTO.src} alt={PROFILE_PHOTO.title} />
      </Figure>
    </div>
  ))
  .add('Icon', () => (
    <div className="h-stack">
      <Figure small>
        <Close />
      </Figure>
      <Figure>
        <Close />
      </Figure>
      <Figure big>
        <Close />
      </Figure>
    </div>
  ));
