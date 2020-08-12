import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiComboBox';
import { FC, ReactNode } from 'react';

export interface MultiComboBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Defines if the user input will be prevented, if no matching item has been found
   */
  allowCustomValues?: boolean;
  /**
   * Defines whether <code>ui5-multi-combobox</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>ui5-multi-combobox</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.
   */
  open?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>ui5-multi-combobox</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>ui5-multi-combobox</code> is read-only. <br><br> <b>Note:</b> A read-only <code>ui5-multi-combobox</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ui5-multi-combobox</code> is required.
   */
  required?: boolean;
  /**
   * Defines the value of the <code>ui5-multi-combobox</code>. <br><br> <b>Note:</b> The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-multi-combobox</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>ui5-multi-combobox</code> items. <br><br> Example: <br> &lt;ui5-multi-combobox><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #1&lt;/ui5-li><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #2&lt;/ui5-li><br> &lt;/ui5-multi-combobox> <br> <br>
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>ui5-multi-combobox</code> changes at each keystroke.
   */
  onInput?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the dropdown is opened or closed.
   */
  onOpenChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.
   */
  onSelectionChange?: (event: CustomEvent<{ items: unknown[] }>) => void;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</a>
 */
const MultiComboBox: FC<MultiComboBoxPropTypes> = withWebComponent<MultiComboBoxPropTypes>(
  'ui5-multi-combobox',
  ['placeholder', 'value', 'valueState'],
  ['allowCustomValues', 'disabled', 'open', 'readonly', 'required'],
  [],
  ['change', 'input', 'open-change', 'selection-change']
);

MultiComboBox.displayName = 'MultiComboBox';

MultiComboBox.defaultProps = {
  allowCustomValues: false,
  disabled: false,
  open: false,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { MultiComboBox };
