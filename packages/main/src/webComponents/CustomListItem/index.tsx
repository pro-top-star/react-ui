import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5CustomListItem from '@ui5/webcomponents/dist/CustomListItem';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CustomListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the content of the <code>ui5-li-custom</code>.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the selected state of the <code>ListItem</code>.
   */
  selected?: boolean;
  /**
   * Defines the visual indication and behavior of the list items.
   * Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>.
   * <br><br>
   * <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover,
   * while with type <code>Inactive</code> and <code>Detail</code> - will not.
   */
  type?: ListItemTypes;
}

/**
 * <code>import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/CustomListItem" target="_blank">UI5 Web Components Playground</a>
 */
const CustomListItem: FC<CustomListItemPropTypes> = withWebComponent<CustomListItemPropTypes>(UI5CustomListItem);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {
  selected: false,
  type: ListItemTypes.Active
};

export { CustomListItem };
