import { Event, fonts, StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, ReactNode, ReactNodeArray, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ColumnType } from '../types/ColumnType';
import { ColumnHeaderModal } from './ColumnHeaderModal';

export interface ColumnHeaderProps {
  defaultSortDesc: boolean;
  onFilteredChange: (event: Event) => void;
  onGroupBy: (strArr: string[]) => void;
  children: ReactNode | ReactNodeArray;
  grouping: string;
  className: string;
  column: ColumnType;
  style: CSSProperties;
  groupable: boolean;
  sortable: boolean;
  filterable: boolean;
  sticky?: boolean;
  onSort?: (e: Event) => void;
}

const styles = ({ parameters }: JSSTheme) => ({
  header: {
    padding: `0 0.5rem`,
    height: '100%',
    display: 'flex',
    justifyContent: 'begin',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    background: parameters.sapUiListHeaderBackground
  },
  iconContainer: {
    display: 'inline-block',
    position: 'absolute',
    color: parameters.sapUiContentIconColor,
    right: '0',
    marginRight: '0.5rem',
    '& :last-child': {
      marginLeft: '0.25rem'
    }
  },
  sticky: {
    position: 'sticky',
    top: 0
  }
});

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles);

export const ColumnHeader: FC<ColumnHeaderProps> = (props) => {
  const classes = useStyles(props);

  const { children, column, className, style, groupable, sortable, filterable, sticky, onSort } = props;

  const openBy = useMemo(() => {
    if (!column) return null;

    const isFiltered = column.filterValue && column.filterValue.length > 0;
    const desc = column.isSortedDesc;

    const classNames = StyleClassHelper.of(classes.header);

    const sortingIcon = column.isSorted ? <Icon src={desc ? 'sort-descending' : 'sort-ascending'} /> : null;
    const filterIcon = isFiltered ? <Icon src="sap-icon://filter" /> : null;
    const groupingIcon = column.isGrouped ? <Icon src="sap-icon://group-2" /> : null;

    return (
      <div className={classNames.valueOf()}>
        {children}
        <div className={classes.iconContainer}>
          {filterIcon}
          {sortingIcon}
          {groupingIcon}
        </div>
      </div>
    );
  }, [classes, column.filterValue, column.isSorted, column.isGrouped, column.isSortedDesc, children]);

  style.width = '100%';
  style.fontWeight = 'normal';
  style.cursor = 'pointer';
  style.height = '100%';

  if (!column) return null;

  let thClasses = className;
  if (sticky) {
    thClasses = `${thClasses} ${classes.sticky}`;
  }
  return (
    <th className={thClasses}>
      {groupable || sortable || filterable ? (
        <ColumnHeaderModal
          openBy={openBy}
          showFilter={filterable}
          showGroup={groupable}
          showSort={sortable}
          column={column}
          style={style}
          onSort={onSort}
        />
      ) : (
        openBy
      )}
    </th>
  );
};
