import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';
import React from 'react';
import { bigDataSet, complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  BarChart',
  component: BarChart
};

export const renderStory = () => {
  return (
    <BarChart
      loading={boolean('loading', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      style={{ height: '60vh' }}
      chartConfig={{}}
      dimensions={[
        {
          accessor: 'name'
        }
      ]}
      measures={[
        {
          accessor: 'users',
          label: 'Users',
          formatter: (val) => val.toLocaleString(),
          opacity: 0.6
        },
        {
          accessor: 'sessions',
          label: 'Active Sessions',
          formatter: (val) => `${val} sessions`,
          hideDataLabel: true
        },
        {
          accessor: 'volume',
          label: 'Vol.'
        }
      ]}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    dimensions={[{ accessor: 'name' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={simpleDataSet}
    style={{ width: '95%', height: '40vh' }}
  />
);

renderStoryWithCustomColor.story = {
  name: 'With custom color'
};

export const withSecondaryDimension = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    dimensions={[{ accessor: 'name' }, { accessor: 'dimension' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={secondaryDimensionDataSet}
    style={{ width: '95%', height: '60vh' }}
  />
);

withSecondaryDimension.story = {
  name: 'With secondary dimension'
};

export const renderLabelStory = () => {
  return (
    <BarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users'
        },
        {
          accessor: 'sessions'
        },
        {
          accessor: 'volume'
        }
      ]}
      dataset={complexDataSet}
      style={{ width: '95%', height: '40vh' }}
      chartConfig={{
        zoomingTool: true
      }}
    />
  );
};

renderLabelStory.story = {
  name: 'With data labels'
};

export const renderCustomDataLabelStory = () => {
  return (
    <BarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      dimensions={[{ accessor: 'name', formatter: (element: string) => element.slice(0, 3) }]}
      measures={[
        {
          accessor: 'users',
          formatter: (element: number) => `${element / 10}`,
          label: 'number of users'
        },
        {
          accessor: 'sessions'
        },
        {
          accessor: 'volume'
        }
      ]}
      style={{ width: '95%', height: '100vh' }}
      chartConfig={{
        zoomingTool: true
      }}
    />
  );
};

renderCustomDataLabelStory.story = {
  name: 'With formatter'
};

export const loadingPlaceholder = () => <BarChart style={{ width: '30%' }} dimensions={[]} measures={[]} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withReferenceLineStory = () => {
  return (
    <BarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          stackId: 'A'
        },
        {
          accessor: 'sessions',
          stackId: 'A'
        },
        {
          accessor: 'volume'
        }
      ]}
      style={{ width: '95%', height: '70vh' }}
      noLegend={false}
      loading
      chartConfig={{
        referenceLine: {
          color: 'red',
          label: 'MAX',
          value: 650
        }
      }}
    />
  );
};

withReferenceLineStory.story = {
  name: 'With reference line'
};
