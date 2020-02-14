import { select } from '@storybook/addon-knobs';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

export const defaultStory = () => {
  return (
    <Bar
      design={select('design', BarDesign, BarDesign.Auto)}
      renderContentLeft={() => <Label>Content Left</Label>}
      renderContentMiddle={() => <Label>Content Middle</Label>}
      renderContentRight={() => <Label>Content Right</Label>}
    />
  );
};
defaultStory.story = {
  name: 'Default'
};

export default {
  title: 'Components / Bar',
  component: Bar
};
