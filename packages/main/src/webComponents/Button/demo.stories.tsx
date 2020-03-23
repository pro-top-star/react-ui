import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import React from 'react';

export default {
  title: 'UI5 Web Components / Button',
  component: Button
};

export const generatedDefaultStory = () => (
  <Button
    design={select('design', ButtonDesign, ButtonDesign.Default)}
    disabled={boolean('disabled', false)}
    icon={'add'}
    iconEnd={boolean('iconEnd', false)}
    onClick={action('onClick')}
  >
    Some Content
  </Button>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
