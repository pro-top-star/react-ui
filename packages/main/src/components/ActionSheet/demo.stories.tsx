import { select } from '@storybook/addon-knobs';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import React from 'react';

export default {
  title: 'Components / ActionSheet',
  component: ActionSheet
};

export const defaultStory = () => (
  <ActionSheet
    openBy={<Button>Open ActionSheet</Button>}
    placement={select('placement', [PlacementType.Top, PlacementType.Bottom], PlacementType.Top)}
  >
    <Button icon="add">Accept</Button>
    <Button>Reject</Button>
    <Button>This is my super long text!</Button>
  </ActionSheet>
);

defaultStory.story = { name: 'Default' };
