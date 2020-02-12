import React from 'react';

export const VirtualTableRow = (props) => {
  const { style, index, data } = props;
  const { additionalProps, rows } = data;
  const { isTreeTable, classes, alternateRowColor } = additionalProps;
  const row = rows[index];

  if (!row) {
    return null;
  }

  const rowProps = row.getRowProps();

  if (alternateRowColor && index % 2 !== 0) {
    rowProps.className += ` ${classes.alternateRowColor}`;
  }

  return (
    <div {...rowProps} style={style} aria-rowindex={index}>
      {row.cells.map((cell) => {
        if (row.original?.emptyRow) return <div {...cell.getCellProps()} />;
        let contentToRender = 'Cell';
        if (isTreeTable) {
          contentToRender = 'Expandable';
        } else if (cell.isGrouped) {
          contentToRender = 'Grouped';
        } else if (row.isGrouped) {
          contentToRender = 'Aggregated';
        } else if (cell.isRepeatedValue || cell.column.isGrouped) {
          contentToRender = 'RepeatedValue';
        }
        return <div {...cell.getCellProps()}>{cell.render(contentToRender)}</div>;
      })}
    </div>
  );
};
