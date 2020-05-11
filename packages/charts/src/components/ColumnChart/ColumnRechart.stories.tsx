import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/next/ColumnChart';
import React from 'react';
import { complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  ColumnChart',
  component: ColumnChart
};

export const renderStory = () => (
  <ColumnChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    dataset={complexDataSet}
    style={{ height: '60vh' }}
    dimensions={[
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`
      }
    ]}
    measures={[
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString()
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

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = () => (
  <ColumnChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
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
  <ColumnChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
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

export const renderLabelStory = () => (
  <ColumnChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
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
    dataset={complexDataSet}
    style={{ width: '95%', height: '40vh' }}
    chartConfig={{
      zoomingTool: true
    }}
  />
);

renderLabelStory.story = {
  name: 'With data labels'
};

export const renderCustomDataLabelStory = () => (
  <ColumnChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
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
    style={{ width: '95%', height: '40vh' }}
    chartConfig={{
      zoomingTool: true
    }}
  />
);

renderCustomDataLabelStory.story = {
  name: 'With formatter'
};

export const loadingPlaceholder = () => <ColumnChart style={{ width: '30%' }} dimensions={[]} measures={[]}/>;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withReferenceLineStory = () => {
  return (
    <ColumnChart
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
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
      style={{ width: '95%', height: '40vh' }}
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
