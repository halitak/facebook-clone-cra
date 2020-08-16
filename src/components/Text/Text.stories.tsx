import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './Text';

storiesOf('Typografy', module)
  .add('Normal', () => <Text>Lorem ipsum dolor sit amet.</Text>)
  .add('Bold', () => <Text bold>Lorem ipsum dolor sit amet.</Text>);
