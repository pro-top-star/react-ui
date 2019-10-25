import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import React, {
  ComponentType,
  CSSProperties,
  FC,
  forwardRef,
  ReactNode,
  ReactText,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useExpanded, useFilters, useGroupBy, useSortBy, useTable } from 'react-table';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './ColumnHeader';
import { DefaultFilterComponent } from './ColumnHeader/DefaultFilterComponent';
import { DefaultNoDataComponent } from './DefaultNoDataComponent';
import { useResizeColumns } from './hooks/useResizeColumns';
import { useRowSelection } from './hooks/useRowSelection';
import { useTableCellStyling } from './hooks/useTableCellStyling';
import { useTableHeaderGroupStyling } from './hooks/useTableHeaderGroupStyling';
import { useTableHeaderStyling } from './hooks/useTableHeaderStyling';
import { useTableRowStyling } from './hooks/useTableRowStyling';
import { useTableStyling } from './hooks/useTableStyling';
import { makeTemplateColumns } from './hooks/utils';
import { LoadingComponent } from './LoadingComponent';
import { TitleBar } from './TitleBar';
import { VirtualTableBody } from './virtualization/VirtualTableBody';
import { useTableScrollHandles } from './hooks/useTableScrollHandles';
import { Device } from '@ui5/webcomponents-react-base/lib/Device';

export interface ColumnConfiguration {
  accessor?: string;
  width?: number;
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;
  canResize?: boolean;
  minWidth?: number;

  [key: string]: any;
}

export interface TableProps extends CommonProps {
  cellHeight?: CSSProperties['height'];
  loading?: boolean;
  busyIndicatorEnabled?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  groupable?: boolean;
  selectable?: boolean;
  data: object[];
  /**
   * In addition to the standard 'react-table' column config you can pass the properties 'hAlign' and 'vAlign'.
   * These will align the text inside the column accordingly.
   * values for hAlign: Begin | End | Left | Right | Center | Initial (default)
   * values for vAlign: Bottom | Middle | Top | Inherit (default)
   */
  columns: ColumnConfiguration[];
  /**
   * Component or text of title section of the Table (if not set it will be hidden)
   */
  title?: ReactText | ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  renderExtension?: () => ReactNode;
  minRows?: number;
  /*
   * Pass in any react-table props you need
   */
  reactTableProps?: object;
  groupBy?: string[];
  getTableProps?: () => any;
  getHeaderGroupsProps?: () => any;
  getHeaderProps?: () => any;
  getRowProps?: () => any;
  getCellProps?: () => any;
  onRowSelected?: (e?: Event) => any;
  NoDataComponent?: ComponentType<any>;
  noDataText?: string;

  // events

  onSort?: (e?: Event) => void;
  onGroup?: (e?: Event) => void;
  /**
   * additional options which will be passed to [react-table´s useTable hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#table-options)
   */
  reactTableOptions?: object;
  tableHooks?: Array<() => any>;
  visibleRows?: number;
  subRowsKey?: string;
  selectedRowKey?: string;
  rowHeight?: number;
  isTreeTable?: boolean;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'AnalyticalTable' });
const defaultFilterMethod = (filter, row) => {
  return new RegExp(filter.value, 'gi').test(String(row[filter.id]));
};

const DEFAULT_COLUMN_WIDTH = 60;

const defaultColumn: any = {
  Filter: DefaultFilterComponent,
  canResize: true,
  minWidth: DEFAULT_COLUMN_WIDTH,
  width: '1fr',
  vAlign: VerticalAlign.Middle,
  Aggregated: () => null,
  defaultFilter: defaultFilterMethod
};

const AnalyticalTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>) => {
  const {
    columns,
    data,
    groupable,
    className,
    style,
    tooltip,
    title,
    renderExtension,
    cellHeight,
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
    isTreeTable
  } = props;
  const theme = useTheme() as JSSTheme;
  const classes = useStyles({
    ...props,
    ...theme
  });
  const [tableWidth, setTableWidth] = useState(0);

  const [selectedRowPath, onRowClicked] = useRowSelection(onRowSelected, selectedRowKey);
  const [resizedColumns, onColumnSizeChanged] = useResizeColumns();

  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);

  const getSubRows = useCallback((row) => row[subRowsKey] || [], [subRowsKey]);

  const { getTableProps, headerGroups, rows, prepareRow, setState, state: tableState } = useTable(
    {
      columns,
      data,
      defaultColumn,
      getSubRows,
      ...reactTableOptions
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useTableStyling(classes),
    useTableHeaderGroupStyling(classes, resizedColumns),
    useTableHeaderStyling(classes, onColumnSizeChanged),
    useTableRowStyling(classes, resizedColumns, selectable, selectedRowPath, selectedRowKey),
    useTableCellStyling(classes, cellHeight),
    ...tableHooks
  );

  useEffect(() => {
    setState((old) => {
      return {
        ...old,
        groupBy
      };
    });
  }, [groupBy, setState]);

  const tableBodyClasses = StyleClassHelper.of(classes.tbody);
  if (selectable) {
    tableBodyClasses.put(classes.selectable);
  }

  const tableContainerClasses = StyleClassHelper.of(classes.tableContainer);

  if (theme.contentDensity === ContentDensity.Compact && !rowHeight) {
    tableContainerClasses.put(classes.compactSize);
  }

  if (!!rowHeight) {
    tableContainerClasses.put(classes.propRowHeight);
  }

  const rowContainerStyling = useMemo(() => {
    return {
      gridTemplateColumns: makeTemplateColumns(headerGroups.map(({ headers }) => headers).flat(), resizedColumns)
    };
  }, [headerGroups, resizedColumns]);

  const onGroupByChanged = useCallback(
    (e) => {
      const { column, isGrouped } = e.getParameters();
      let groupedColumns = [];
      if (isGrouped) {
        groupedColumns = [...tableState.groupBy, column.id];
      } else {
        groupedColumns = tableState.groupBy.filter((group) => group !== column.id);
      }
      setState((old) => {
        return {
          ...old,
          groupBy: groupedColumns
        };
      });
      onGroup(
        Event.of(null, e.getOriginalEvent(), {
          column,
          groupedColumns
        })
      );
    },
    [tableState.groupBy, onGroup]
  );

  const headerRef = useRef(null);
  const onWindowResize = useCallback(() => {
    if (headerRef.current) {
      setTableWidth(headerRef.current.scrollWidth);
    }
  }, [setTableWidth, headerRef.current]);

  useEffect(() => {
    Device.resize.attachHandler(onWindowResize, null);
    return () => {
      Device.resize.detachHandler(onWindowResize, null);
    };
  }, [onWindowResize]);

  const observer = useRef(new MutationObserver(onWindowResize));

  useEffect(() => {
    if (headerRef.current) {
      observer.current.observe(headerRef.current, {
        attributes: true,
        subtree: true,
        childList: true
      });
    }

    return () => {
      observer.current.disconnect();
    };
  }, [headerRef.current, observer.current]);

  return (
    <div className={className} style={style} title={tooltip} ref={analyticalTableRef}>
      {title && <TitleBar>{title}</TitleBar>}
      {typeof renderExtension === 'function' && <div>{renderExtension()}</div>}
      <div className={tableContainerClasses.valueOf()}>
        <div {...getTableProps()} ref={headerRef}>
          {headerGroups.map((headerGroup) => {
            let headerProps = {};
            if (headerGroup.getHeaderGroupProps) {
              headerProps = headerGroup.getHeaderGroupProps();
            }
            return (
              <header {...headerProps}>
                {headerGroup.headers.map((column, index) => (
                  <ColumnHeader
                    {...column.getHeaderProps()}
                    isLastColumn={index === columns.length - 1}
                    groupable={props.groupable}
                    sortable={props.sortable}
                    filterable={props.filterable}
                    onSort={props.onSort}
                    onGroupBy={onGroupByChanged}
                  >
                    {column.render('Header')}
                  </ColumnHeader>
                ))}
              </header>
            );
          })}
          <VirtualTableBody
            {...props}
            isTreeTable={isTreeTable}
            defaultColumnWidth={DEFAULT_COLUMN_WIDTH}
            resizedColumns={resizedColumns}
            tableWidth={tableWidth}
            tableBodyClasses={tableBodyClasses}
            rowContainerStyling={rowContainerStyling}
            prepareRow={prepareRow}
            rows={rows}
            classes={classes}
            onRowClicked={onRowClicked}
            columns={columns}
            selectedRow={selectedRowPath}
            rowHeight={rowHeight}
            reactWindowRef={reactWindowRef}
          />
          {loading && busyIndicatorEnabled && <LoadingComponent />}
        </div>
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
  cellHeight: null,
  minRows: 5,
  groupBy: [],
  NoDataComponent: DefaultNoDataComponent,
  noDataText: 'No Data',
  reactTableOptions: {},
  tableHooks: [],
  visibleRows: 15,
  subRowsKey: 'subRows',
  onGroup: () => {},
  isTreeTable: false
};

export { AnalyticalTable };
