import { Device } from '@ui5/webcomponents-react-base/lib/Device';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import React, {
  ComponentType,
  FC,
  forwardRef,
  ReactNode,
  ReactText,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import {
  PluginHook,
  useAbsoluteLayout,
  useColumnOrder,
  useExpanded,
  useFilters,
  useGroupBy,
  useResizeColumns,
  useSortBy,
  useTable,
  Column
} from 'react-table';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './ColumnHeader';
import { DefaultColumn } from './defaults/Column';
import { DefaultLoadingComponent } from './defaults/LoadingComponent';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder';
import { DefaultNoDataComponent } from './defaults/NoDataComponent';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import { useRowSelection } from './hooks/useRowSelection';
import { useTableCellStyling } from './hooks/useTableCellStyling';
import { useTableHeaderGroupStyling } from './hooks/useTableHeaderGroupStyling';
import { useTableHeaderStyling } from './hooks/useTableHeaderStyling';
import { useTableRowStyling } from './hooks/useTableRowStyling';
import { useTableScrollHandles } from './hooks/useTableScrollHandles';
import { useTableStyling } from './hooks/useTableStyling';
import { useToggleRowExpand } from './hooks/useToggleRowExpand';
import { stateReducer } from './tableReducer/stateReducer';
import { TitleBar } from './TitleBar';
import { VirtualTableBody } from './virtualization/VirtualTableBody';

export interface ColumnConfiguration extends Column {
  accessor?: string;
  width?: number;
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;
  canResize?: boolean;
  minWidth?: number;

  [key: string]: any;
}

export interface TableProps extends CommonProps {
  /**
   * In addition to the standard 'react-table' column config you can pass the properties 'hAlign' and 'vAlign'.
   * These will align the text inside the column accordingly.
   * values for hAlign: Begin | End | Left | Right | Center | Initial (default)
   * values for vAlign: Bottom | Middle | Top | Inherit (default)
   */
  columns: ColumnConfiguration[];
  data: object[];

  /**
   * Component or text of title section of the Table (if not set it will be hidden)
   */
  title?: ReactText | ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  renderExtension?: () => ReactNode;

  // appearance

  minRows?: number;
  visibleRows?: number;
  loading?: boolean;
  busyIndicatorEnabled?: boolean;
  noDataText?: string;
  rowHeight?: number;
  alternateRowColor?: boolean;

  // features

  filterable?: boolean;
  sortable?: boolean;
  groupable?: boolean;
  groupBy?: string[];
  selectable?: boolean;
  columnOrder?: object[];

  // events

  onSort?: (e?: Event) => void;
  onGroup?: (e?: Event) => void;
  onRowSelected?: (e?: Event) => any;
  onRowExpandChange?: (e?: Event) => any;
  onColumnsReordered?: (e?: Event) => void;
  /**
   * additional options which will be passed to [react-table´s useTable hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#table-options)
   */
  reactTableOptions?: object;
  tableHooks?: Array<PluginHook<any>>;
  subRowsKey?: string;
  selectedRowKey?: string;
  isTreeTable?: boolean;
  overscanCount?: number;

  // default components

  NoDataComponent?: ComponentType<any>;
  LoadingComponent?: ComponentType<any>;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'AnalyticalTable' });
const ROW_HEIGHT_COMPACT = 32;
const ROW_HEIGHT_COZY = 44;

const AnalyticalTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>) => {
  const {
    columns,
    data,
    className,
    style,
    tooltip,
    title,
    renderExtension,
    loading,
    groupBy,
    selectable,
    onRowSelected,
    reactTableOptions,
    tableHooks,
    busyIndicatorEnabled,
    subRowsKey,
    onGroup,
    rowHeight,
    selectedRowKey,
    LoadingComponent,
    onRowExpandChange,
    noDataText,
    NoDataComponent,
    visibleRows,
    minRows,
    isTreeTable,
    alternateRowColor,
    overscanCount
  } = props;
  const theme = useTheme() as JSSTheme;
  const classes = useStyles({ rowHeight: props.rowHeight });

  const [selectedRowPath, onRowClicked] = useRowSelection(onRowSelected, selectedRowKey);
  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);
  const tableRef: RefObject<HTMLDivElement> = useRef();

  const getSubRows = useCallback((row) => row[subRowsKey] || [], [subRowsKey]);

  const [columnWidth, setColumnWidth] = useState(null);

  const defaultColumn = useMemo(() => {
    if (columnWidth) {
      return {
        width: columnWidth,
        ...DefaultColumn
      };
    }
    return DefaultColumn;
  }, [columnWidth]);

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state: tableState,
    setColumnOrder,
    dispatch,
    totalColumnsWidth
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      getSubRows,
      stateReducer,
      ...reactTableOptions
    },
    useFilters,
    useGroupBy,
    useColumnOrder,
    useSortBy,
    useExpanded,
    useAbsoluteLayout,
    useResizeColumns,
    useTableStyling(classes),
    useTableHeaderGroupStyling(classes),
    useTableHeaderStyling(classes),
    useTableRowStyling(classes, selectable, selectedRowPath, selectedRowKey, onRowClicked, alternateRowColor),
    useTableCellStyling(classes, rowHeight),
    useToggleRowExpand(onRowExpandChange, isTreeTable),
    ...tableHooks
  );

  const updateTableSizes = useCallback(() => {
    const visibleColumns = columns.filter(Boolean).filter(({ show }) => show ?? true);
    const columnsWithFixedWidth = columns.filter(({ width }) => width ?? false).map(({ width }) => width);
    const fixedWidth = columnsWithFixedWidth.reduce((acc, val) => acc + val, 0);
    if (visibleColumns.length > 0 && tableRef.current.clientWidth > 0) {
      setColumnWidth(
        (tableRef.current.clientWidth - fixedWidth) / (visibleColumns.length - columnsWithFixedWidth.length)
      );
    } else {
      setColumnWidth(150);
    }
  }, []);

  useEffect(() => {
    updateTableSizes();
    Device.resize.attachHandler(updateTableSizes, null);
    return () => Device.resize.detachHandler(updateTableSizes, null);
  }, [updateTableSizes]);

  useEffect(() => {
    dispatch({ type: 'SET_GROUP_BY', payload: groupBy });
  }, [groupBy, dispatch]);

  const tableContainerClasses = StyleClassHelper.of(classes.tableContainer);

  if (theme.contentDensity === ContentDensity.Compact) {
    tableContainerClasses.put(classes.compactSize);
  }

  if (!!rowHeight) {
    tableContainerClasses.put(classes.modifiedRowHeight);
  }

  const internalRowHeight = useMemo(() => {
    let height = theme.contentDensity === ContentDensity.Compact ? ROW_HEIGHT_COMPACT : ROW_HEIGHT_COZY;
    if (rowHeight) {
      height = rowHeight;
    }
    return height;
  }, [rowHeight, theme.contentDensity]);

  const tableBodyHeight = useMemo(() => {
    return internalRowHeight * Math.max(rows.length < visibleRows ? rows.length : visibleRows, minRows);
  }, [internalRowHeight, rows.length, minRows, visibleRows]);

  const noDataStyles = useMemo(() => {
    return {
      height: `${tableBodyHeight}px`
    };
  }, [tableBodyHeight]);

  const onGroupByChanged = useCallback(
    (e) => {
      const { column, isGrouped } = e.getParameters();
      let groupedColumns = [];
      if (isGrouped) {
        groupedColumns = [...tableState.groupBy, column.id];
      } else {
        groupedColumns = tableState.groupBy.filter((group) => group !== column.id);
      }
      dispatch({ type: 'SET_GROUP_BY', payload: groupedColumns });
      onGroup(
        Event.of(null, e.getOriginalEvent(), {
          column,
          groupedColumns
        })
      );
    },
    [tableState.groupBy, onGroup, dispatch]
  );

  const [dragOver, handleDragEnter, handleDragStart, handleDragOver, handleOnDrop, handleOnDragEnd] = useDragAndDrop(
    props,
    setColumnOrder,
    tableState.columnOrder,
    tableState.columnResizing
  );

  return (
    <div className={className} style={style} title={tooltip} ref={analyticalTableRef}>
      {title && <TitleBar>{title}</TitleBar>}
      {typeof renderExtension === 'function' && <div>{renderExtension()}</div>}
      <div className={tableContainerClasses.valueOf()} ref={tableRef}>
        {columnWidth && (
          <div {...getTableProps()} role="table" aria-rowcount={rows.length}>
            {headerGroups.map((headerGroup) => {
              let headerProps = {};
              if (headerGroup.getHeaderGroupProps) {
                headerProps = headerGroup.getHeaderGroupProps();
              }
              return (
                <header {...headerProps} role="rowgroup">
                  {headerGroup.headers.map((column, index) => (
                    <ColumnHeader
                      id={column.id}
                      {...column.getHeaderProps()}
                      isLastColumn={index === columns.length - 1}
                      groupable={props.groupable}
                      sortable={props.sortable}
                      filterable={props.filterable}
                      onSort={props.onSort}
                      onGroupBy={onGroupByChanged}
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDrop={handleOnDrop}
                      onDragEnter={handleDragEnter}
                      onDragEnd={handleOnDragEnd}
                      dragOver={column.id === dragOver}
                      column={column}
                      isDraggable={!isTreeTable}
                    >
                      {column.render('Header')}
                    </ColumnHeader>
                  ))}
                </header>
              );
            })}
            {loading && busyIndicatorEnabled && data.length > 0 && <LoadingComponent />}
            {loading && data.length === 0 && (
              <TablePlaceholder
                columns={columns.filter((col) => col.show ?? true).length}
                rows={props.minRows}
                style={noDataStyles}
                rowHeight={internalRowHeight}
              />
            )}
            {!loading && data.length === 0 && (
              <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} style={noDataStyles} />
            )}
            {data.length > 0 && (
              <VirtualTableBody
                classes={classes}
                prepareRow={prepareRow}
                rows={rows}
                minRows={minRows}
                columns={columns}
                selectedRow={selectedRowKey}
                selectedRowPath={selectedRowPath}
                selectable={selectable}
                reactWindowRef={reactWindowRef}
                isTreeTable={isTreeTable}
                internalRowHeight={internalRowHeight}
                tableBodyHeight={tableBodyHeight}
                visibleRows={visibleRows}
                alternateRowColor={alternateRowColor}
                overscanCount={overscanCount}
                totalColumnsWidth={totalColumnsWidth}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  loading: false,
  busyIndicatorEnabled: true,
  sortable: true,
  filterable: false,
  groupable: false,
  selectable: false,
  data: [],
  columns: [],
  title: null,
  minRows: 5,
  groupBy: [],
  NoDataComponent: DefaultNoDataComponent,
  LoadingComponent: DefaultLoadingComponent,
  noDataText: 'No Data',
  reactTableOptions: {},
  tableHooks: [],
  visibleRows: 15,
  subRowsKey: 'subRows',
  onGroup: () => {},
  onRowExpandChange: () => {},
  onColumnsReordered: () => {},
  isTreeTable: false,
  alternateRowColor: false
};

export { AnalyticalTable };
