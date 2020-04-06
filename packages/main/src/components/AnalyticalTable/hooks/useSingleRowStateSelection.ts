import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { useCallback } from 'react';

const prepareRow = (row, { instance }) => {
  row.selectSingleRow = (event, selectionCellClick = false) => {
    instance.selectSingleRow(row, event, selectionCellClick);
  };
};

const getRowProps = (rowProps, { row }) => {
  return [
    rowProps,
    {
      onClick: row.selectSingleRow
    }
  ];
};

const useInstance = (instance) => {
  const { webComponentsReactProperties, dispatch, toggleRowSelected, selectedFlatRows } = instance;
  const { isTreeTable, selectionMode, onRowSelected, selectionBehavior } = webComponentsReactProperties;

  const selectSingleRow = useCallback(
    (row, e, selectionCellClick = false) => {
      const isEmptyRow = row.original?.emptyRow;
      if ([TableSelectionMode.SINGLE_SELECT, TableSelectionMode.MULTI_SELECT].includes(selectionMode) && !isEmptyRow) {
        if (row.isGrouped || (TableSelectionBehavior.ROW_SELECTOR === selectionBehavior && !selectionCellClick)) {
          return;
        }
        if (isTreeTable) {
          if (selectionMode === TableSelectionMode.MULTI_SELECT) {
            dispatch({
              type: 'SET_SELECTED_ROWS',
              selectedIds: Object.assign({}, ...selectedFlatRows.map((item) => ({ [item.id]: true })), {
                [row.id]: !row.isSelected
              })
            });
          } else {
            dispatch({ type: 'SET_SELECTED_ROWS', selectedIds: { [row.id]: !row.isSelected } });
          }
        } else {
          row.toggleRowSelected();
        }
        if (typeof onRowSelected === 'function') {
          const payload = {
            row,
            isSelected: !row.isSelected
          };
          const payloadWithFlatRows = {
            ...payload,
            selectedFlatRows: !row.isSelected
              ? [...selectedFlatRows, row]
              : selectedFlatRows.filter((prevRow) => prevRow.id !== row.id)
          };
          onRowSelected(
            enrichEventWithDetails(e, TableSelectionMode.MULTI_SELECT === selectionMode ? payloadWithFlatRows : payload)
          );
        }
        if (selectionMode === TableSelectionMode.SINGLE_SELECT && !isTreeTable) {
          selectedFlatRows.forEach(({ id }) => {
            toggleRowSelected(id, false);
          });
        }
      }
    },
    [selectionMode, isTreeTable, dispatch, selectedFlatRows, onRowSelected, toggleRowSelected]
  );

  Object.assign(instance, { selectSingleRow });
};

export const useSingleRowStateSelection = (hooks) => {
  hooks.useInstance.push(useInstance);
  hooks.prepareRow.push(prepareRow);
  hooks.getRowProps.push(getRowProps);
};
useSingleRowStateSelection.pluginName = 'useSingleRowStateSelection';
