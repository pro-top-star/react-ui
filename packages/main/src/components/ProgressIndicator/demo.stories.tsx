import React from 'react';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import { number, text, select } from '@storybook/addon-knobs';

export const renderStory = () => {
  return (
    <div>
      <ProgressIndicator
        percentValue={number('percentValue', 5)}
        width={text('width', '50%')}
        displayValue={text('displayValue', '5%')}
        // @ts-ignore
        state={select('state', ValueState, ValueState.None)}
      />
      <ProgressIndicator percentValue={95} width="50%" displayValue="95%" />
      <ProgressIndicator percentValue={25} state={ValueState.Success} displayValue="25 GB" />
      <ProgressIndicator percentValue={50} state={ValueState.Warning} displayValue="50/100" />
      <ProgressIndicator percentValue={75} state={ValueState.Error} displayValue="75%" />
      <ProgressIndicator percentValue={33} state={ValueState.Information} displayValue="33%" />
    </div>
  );
};
renderStory.story = {
  name: 'Default'
};

export default {
  title: 'Components | ProgressIndicator',
  component: ProgressIndicator
};
