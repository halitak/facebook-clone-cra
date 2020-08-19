import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from './Title';

storiesOf('Typografy', module)
  .add('Normal', () => <Title>Lorem ipsum dolor sit amet.</Title>)
  .add('Bold', () => <Title bold>Lorem ipsum dolor sit amet.</Title>);
