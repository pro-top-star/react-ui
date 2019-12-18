import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { DefaultFilterComponent } from '../FilterComponent';
import { Aggregated } from './Aggregated';
import { Cell } from './Cell';
import { Expandable } from './Expandable';
import { Grouped } from './Grouped';
import { RepeatedValue } from './RepeatedValue';

export const DEFAULT_COLUMN_WIDTH = 60;

const defaultFilterMethod = (filter, row) => {
  return new RegExp(filter.value, 'gi').test(String(row[filter.id]));
};

export const DefaultColumn = {
  Filter: DefaultFilterComponent,
  canResize: true,
  minWidth: DEFAULT_COLUMN_WIDTH,
  vAlign: VerticalAlign.Middle,
  Aggregated: Aggregated,
  defaultFilter: defaultFilterMethod,
  Grouped: Grouped,
  Cell: Cell,
  Expandable: Expandable,
  RepeatedValue: RepeatedValue
};
