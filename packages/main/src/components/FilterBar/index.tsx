import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useI18nText } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import {
  CLEAR,
  FILTERS,
  GO,
  HIDE_FILTER_BAR,
  RESTORE,
  SHOW_FILTER_BAR
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { InputPropTypes } from '@ui5/webcomponents-react/lib/Input';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarSeparator } from '@ui5/webcomponents-react/lib/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import styles from './FilterBar.jss';
import { FilterDialog } from './FilterDialog';
import { filterValue, renderSearchWithValue } from './utils';

export interface FilterBarPropTypes extends CommonProps {
  children: ReactNode | ReactNodeArray;
  search?: ReactElement<InputPropTypes>;
  variants?: ReactNode;
  useToolbar?: boolean;
  filterBarExpanded?: boolean;
  filterContainerWidth?: CSSProperties['width'];
  considerGroupName?: boolean;
  showClearOnFB?: boolean;
  showGoOnFB?: boolean;
  showFilterConfiguration?: boolean;
  showClearButton?: boolean;
  showRestoreButton?: boolean;
  showGo?: boolean;
  activeFiltersCount?: number | string;
  loading?: boolean;
  showSearchOnFiltersDialog?: boolean;
  showRestoreOnFB?: boolean;
  onToggleFilters?: (event: CustomEvent<{ visible?: boolean }>) => void;
  onFiltersDialogSave?: (event: CustomEvent<{ elements?: unknown; toggledElements?: unknown }>) => void;
  onFiltersDialogClear?: (event: CustomEvent) => void;
  onFiltersDialogCancel?: (event: CustomEvent) => void;
  onFiltersDialogOpen?: (event: CustomEvent) => void;
  onFiltersDialogClose?: (event: CustomEvent) => void;
  onFiltersDialogSelectionChange?: (event: CustomEvent<{ element?: unknown; checked?: unknown }>) => void;
  onFiltersDialogSearch?: (event: CustomEvent<{ value?: unknown }>) => void;
  onClear?: (event: CustomEvent) => void;
  onGo?: (event: CustomEvent) => void;
  onRestore?: (event: CustomEvent<{ source?: unknown }>) => void;
}

const useStyles = createComponentStyles(styles, { name: 'FilterBar' });

const FilterBar: FC<FilterBarPropTypes> = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    children,
    useToolbar,
    loading,
    filterBarExpanded,
    considerGroupName,
    filterContainerWidth,
    activeFiltersCount,
    showClearOnFB,
    showGoOnFB,
    showGo,
    showFilterConfiguration,
    showRestoreOnFB,
    showClearButton,
    showRestoreButton,
    showSearchOnFiltersDialog,
    style,
    className,
    tooltip,
    slot,
    search,
    variants,

    onToggleFilters,
    onFiltersDialogOpen,
    onFiltersDialogCancel,
    onFiltersDialogClose,
    onFiltersDialogSave,
    onFiltersDialogClear,
    onClear,
    onFiltersDialogSelectionChange,
    onFiltersDialogSearch,
    onGo,
    onRestore
  } = props;
  const [showFilters, setShowFilters] = useState(useToolbar ? filterBarExpanded : true);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(undefined);
  const searchRef = useRef(null);
  const filterRefs = useRef({});
  const [dialogRefs, setDialogRefs] = useState({});
  const [toggledFilters, setToggledFilters] = useState({});
  const prevVisibleInFilterBarProps = useRef({});
  const prevSearchInputPropsValueRef = useRef<string>();

  const [clearText, restoreText, showFilterBarText, hideFilterBarText, goText, filtersText] = useI18nText(
    '@ui5/webcomponents-react',
    CLEAR,
    RESTORE,
    SHOW_FILTER_BAR,
    HIDE_FILTER_BAR,
    GO,
    FILTERS
  );

  useEffect(() => {
    if (showFilterConfiguration) {
      Children.toArray(children).forEach((item: ReactElement<any>) => {
        if (
          prevVisibleInFilterBarProps.current?.[item.key] !== undefined &&
          prevVisibleInFilterBarProps.current?.[item.key] !== item.props.visibleInFilterBar
        ) {
          const updatedToggledFilters = toggledFilters;
          delete updatedToggledFilters[item.key];
          setToggledFilters(updatedToggledFilters);
        }
      });
    }
  }, [children, prevVisibleInFilterBarProps, setToggledFilters, toggledFilters, showFilterConfiguration]);

  useEffect(() => {
    setShowFilters(useToolbar ? filterBarExpanded : true);
  }, [setShowFilters, useToolbar, filterBarExpanded]);

  const classes = useStyles();

  const filterAreaClasses = StyleClassHelper.of(classes.filterArea);
  if (showFilters) {
    filterAreaClasses.put(classes.filterAreaOpen);
  } else {
    filterAreaClasses.put(classes.filterAreaClosed);
  }

  const handleToggle = useCallback(
    (e) => {
      if (onToggleFilters) {
        onToggleFilters(enrichEventWithDetails(e, { visible: !showFilters }));
      }
      setShowFilters(!showFilters);
    },
    [showFilters, onToggleFilters, setShowFilters]
  );

  const handleDialogSave = useCallback(
    (e, newRefs, updatedToggledFilters) => {
      setDialogRefs(newRefs);
      setToggledFilters({ ...toggledFilters, ...updatedToggledFilters });
      if (onFiltersDialogSave) {
        onFiltersDialogSave(enrichEventWithDetails(e));
      }
      handleDialogClose(e);
    },
    [setDialogOpen, setDialogRefs, setToggledFilters, onFiltersDialogSave, toggledFilters]
  );

  const handleDialogOpen = useCallback(
    (e) => {
      setDialogOpen(true);
      if (onFiltersDialogOpen) {
        onFiltersDialogOpen(enrichEventWithDetails(e));
      }
    },
    [setDialogOpen, onFiltersDialogOpen]
  );

  const handleDialogClose = useCallback(
    (e) => {
      if (onFiltersDialogClose) {
        onFiltersDialogClose(enrichEventWithDetails(e));
      }
      setDialogOpen(false);
    },
    [setDialogOpen, onFiltersDialogClose]
  );

  const passThroughProps = usePassThroughHtmlProps(props, [
    'onToggleFilters',
    'onFiltersDialogOpen',
    'onFiltersDialogClose',
    'onFiltersDialogSave',
    'onFiltersDialogClear',
    'onClear',
    'onFiltersDialogSelectionChange',
    'onFiltersDialogSearch',
    'onGo',
    'onRestore',
    'onFiltersDialogCancel'
  ]);

  const safeChildren = useCallback(() => {
    if (showFilterConfiguration && Object.keys(toggledFilters).length > 0) {
      return Children.toArray(children).map((child: ReactElement) => {
        if (toggledFilters?.[child.key] !== undefined) {
          return cloneElement(child, {
            visibleInFilterBar: toggledFilters[child.key]
          });
        }
        return child;
      });
    }
    return Children.toArray(children) as unknown[];
  }, [toggledFilters, children]);

  const renderChildren = useCallback(() => {
    const childProps = { considerGroupName, inFB: true } as any;
    return safeChildren()
      .filter((item: ReactElement<any, any>) => {
        if (item.type.displayName !== 'FilterGroupItem') return true; // needed for deprecated FilterItem or custom elements

        return item?.props?.visible && item.props?.visibleInFilterBar;
      })
      .map((child: ReactElement<any, any>) => {
        if (child.type.displayName !== 'FilterGroupItem') return child; // needed for deprecated FilterItem or custom elements
        if (filterContainerWidth) {
          childProps.style = { width: filterContainerWidth, ...child.props.style };
        }
        if (!showFilterConfiguration) {
          return cloneElement(child as ReactElement<any>, { ...childProps });
        }
        prevVisibleInFilterBarProps.current[child.key] = child.props.visibleInFilterBar;
        let filterItemProps = {};
        if (Object.keys(dialogRefs).length > 0) {
          const dialogItemRef = dialogRefs[child.key];
          if (dialogItemRef) {
            filterItemProps = filterValue(dialogItemRef, child);
          }
        }
        if (!child.props.children)
          return cloneElement(child as ReactElement<any>, {
            ...childProps
          });
        return cloneElement(child as ReactElement<any>, {
          ...childProps,
          children: {
            ...child.props.children,
            props: {
              ...child.props.children.props,
              ...filterItemProps
            },
            ref: (node) => {
              filterRefs.current[child.key] = node;
            }
          }
        });
      });
  }, [filterContainerWidth, considerGroupName, dialogRefs, safeChildren, showFilterConfiguration]);

  const handleSearchValueChange = useCallback(
    (newVal) => {
      setSearchValue(newVal);
    },
    [setSearchValue]
  );

  const handleRestoreFilters = useCallback(
    (e, source) => {
      if (source === 'dialog' && showGo) {
        setDialogOpen(false);
        setDialogOpen(true);
      } else if (source === 'filterBar' && showGoOnFB) {
        setMountFilters(false);
        setMountFilters(true);
      }
      if (onRestore) {
        onRestore(enrichEventWithDetails(e, { source }));
      }
    },
    [setDialogOpen, showGo, showGoOnFB, onRestore]
  );

  const handleFBRestore = useCallback(
    (e) => {
      handleRestoreFilters(e, 'filterBar');
    },
    [handleRestoreFilters]
  );

  const cssClasses = StyleClassHelper.of(classes.outerContainer);
  if (className) {
    cssClasses.put(className);
  }
  if (filterContainerWidth) {
    cssClasses.put(classes.filterItemExpand);
  }

  useEffect(() => {
    prevSearchInputPropsValueRef.current = search?.props?.value;
  }, [search?.props?.value]);

  const prevSearchInputPropsValue = prevSearchInputPropsValueRef.current;

  useEffect(() => {
    if (prevSearchInputPropsValue !== search?.props?.value) {
      setSearchValue(search?.props?.value);
    }
  }, [prevSearchInputPropsValue, search?.props?.value]);

  return (
    <>
      {dialogOpen && showFilterConfiguration && (
        <FilterDialog
          filterBarRefs={filterRefs}
          open={dialogOpen}
          handleDialogClose={handleDialogClose}
          onGo={onGo}
          handleRestoreFilters={handleRestoreFilters}
          searchValue={searchRef.current?.children[0].value}
          handleSearchValueChange={handleSearchValueChange}
          showClearButton={showClearButton}
          showRestoreButton={showRestoreButton}
          showSearch={showSearchOnFiltersDialog}
          renderFBSearch={search}
          handleClearFilters={onFiltersDialogClear}
          handleSelectionChange={onFiltersDialogSelectionChange}
          handleDialogSave={handleDialogSave}
          showGoButton={showGo}
          handleDialogSearch={onFiltersDialogSearch}
          handleDialogCancel={onFiltersDialogCancel}
        >
          {safeChildren()}
        </FilterDialog>
      )}
      <div ref={ref} className={cssClasses.toString()} style={style} title={tooltip} slot={slot} {...passThroughProps}>
        {loading ? (
          <BusyIndicator active className={classes.loadingContainer} size={BusyIndicatorSize.Large} />
        ) : (
          <>
            <Toolbar className={classes.filterBarHeader} toolbarStyle={ToolbarStyle.Clear}>
              {variants}
              {search && <ToolbarSeparator />}
              {search && <div ref={searchRef}>{renderSearchWithValue(search, searchValue)}</div>}
              <ToolbarSpacer />
              {useToolbar && showClearOnFB && (
                <Button onClick={onClear} design={ButtonDesign.Transparent}>
                  {clearText}
                </Button>
              )}
              {useToolbar && showRestoreOnFB && (
                <Button onClick={handleFBRestore} design={ButtonDesign.Transparent}>
                  {restoreText}
                </Button>
              )}
              {useToolbar && (
                <Button onClick={handleToggle} design={ButtonDesign.Transparent} className={classes.showFiltersBtn}>
                  {showFilters ? hideFilterBarText : showFilterBarText}
                </Button>
              )}
              {useToolbar && showFilterConfiguration && (
                <Button onClick={handleDialogOpen}>
                  {`${filtersText}${
                    activeFiltersCount && parseInt(activeFiltersCount as string) > 0 ? ` (${activeFiltersCount})` : ''
                  }`}
                </Button>
              )}
              {useToolbar && showGoOnFB && (
                <Button onClick={onGo} design={ButtonDesign.Emphasized}>
                  {goText}
                </Button>
              )}
            </Toolbar>
            {mountFilters && <div className={filterAreaClasses.valueOf()}>{renderChildren()}</div>}
          </>
        )}
      </div>
    </>
  );
});

FilterBar.defaultProps = {
  useToolbar: true,
  filterBarExpanded: true,
  showClearOnFB: false,
  showGo: false,
  showRestoreOnFB: false,
  showGoOnFB: false,
  showFilterConfiguration: false,
  showClearButton: false,
  showRestoreButton: false,
  showSearchOnFiltersDialog: false,
  considerGroupName: false,
  loading: false,
  onToggleFilters: null,
  onFiltersDialogOpen: null,
  onFiltersDialogCancel: null,
  onFiltersDialogClose: null,
  onFiltersDialogSave: null,
  onFiltersDialogClear: null,
  onClear: null,
  onFiltersDialogSelectionChange: null,
  onFiltersDialogSearch: null,
  onGo: null,
  onRestore: null
};

FilterBar.displayName = 'FilterBar';
export { FilterBar };
