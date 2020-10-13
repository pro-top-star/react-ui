import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import React, { forwardRef, Ref, RefObject } from 'react';

interface VerticalScrollbarProps {
  internalRowHeight: number;
  tableRef: RefObject<any>;
  minRows: number;
  rows: any[];
  handleVerticalScrollBarScroll: any;
}

export const VerticalScrollbar = forwardRef((props: VerticalScrollbarProps, ref: Ref<HTMLDivElement>) => {
  const { internalRowHeight, tableRef, minRows, rows, handleVerticalScrollBarScroll } = props;

  const hasHorizontalScrollbar = tableRef?.current?.clientWidth !== tableRef?.current?.scrollWidth;

  return (
    <FlexBox direction={FlexBoxDirection.Column} style={{ position: 'relative' }}>
      <div
        style={{
          height: `${internalRowHeight}px`,
          boxSizing: 'border-box',
          borderLeft: 'none',
          border: `1px solid ${ThemingParameters.sapList_BorderColor}`,
          backgroundColor: ThemingParameters.sapList_HeaderBackground
        }}
      />
      <div
        ref={ref}
        style={{
          overflowY: 'auto',
          height: tableRef.current ? `${tableRef.current.clientHeight - internalRowHeight}px` : '0',
          border: `1px solid ${ThemingParameters.sapList_BorderColor}`,
          borderTop: 'none',
          borderLeft: 'none',
          boxSizing: 'border-box'
        }}
        onScroll={handleVerticalScrollBarScroll}
        className={GlobalStyleClasses.sapScrollBar}
      >
        <div style={{ height: `${Math.max(minRows, rows.length) * internalRowHeight}px`, width: '1px' }} />
      </div>
      <div
        style={{
          flexGrow: 1,
          backgroundColor: ThemingParameters.sapList_HeaderBackground,
          border: hasHorizontalScrollbar ? `1px solid ${ThemingParameters.sapList_BorderColor}` : 'none',
          borderTop: 'none',
          borderLeft: 'none',
          boxSizing: 'border-box'
        }}
      />
    </FlexBox>
  );
});
