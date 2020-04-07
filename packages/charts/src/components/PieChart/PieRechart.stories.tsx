import { action } from '@storybook/addon-actions';
import { PieChart } from '@ui5/webcomponents-react-charts/lib/next/PieChart';
import React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  PieChart',
  component: PieChart
};

export const renderStory = () => {
  return (
    <PieChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <PieChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      color={'lightblue'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <PieChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const renderFormatedStory = () => {
  return (
    <PieChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataValueFormatter={(d) => (d > 200 ? 'over 200' : 'lower')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderFormatedStory.story = {
  name: 'With formatted data labels'
};
