import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import FieldPresentation from "./FieldPresentation.js";
import Types from "./Types.js";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('FieldPresentation', module)
  .add('with text', () => <FieldPresentation type="Text" name="name" />)
