import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / List',
  component: List,
  parameters: {
    subcomponents: { StandardListItem, CustomListItem, GroupHeaderListItem }
  }
};

export const generatedDefaultStory = () => (
  <List
    busy={boolean('busy', false)}
    footerText={text('footerText', '')}
    headerText={text('headerText', '')}
    infiniteScroll={boolean('infiniteScroll', false)}
    inset={boolean('inset', false)}
    mode={select('mode', ListMode, ListMode.None)}
    noDataText={text('noDataText', '')}
    separators={select('separators', ListSeparators, ListSeparators.All)}
    header={null}
    onItemClick={action('onItemClick')}
    onItemDelete={action('onItemDelete')}
    onLoadMore={action('onLoadMore')}
    onSelectionChange={action('onSelectionChange')}
  >
    <StandardListItem info={'3'}>List Item 1</StandardListItem>
    <StandardListItem info={'2'}>List Item 2</StandardListItem>
    <StandardListItem>List Item 3</StandardListItem>
  </List>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
