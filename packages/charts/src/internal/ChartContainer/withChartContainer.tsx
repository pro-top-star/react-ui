import React, { ComponentType, CSSProperties, forwardRef, Ref, useMemo } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { getLoadingState } from '../Placeholder';

const styles = {
  chart: {
    '& canvas': {
      maxWidth: (props) => `${props.width}px`,
      maxHeight: (props) => `${props.height - props.noLegend ? 0 : 60}px`
    },
    '& svg': {
      width: (props) => `${props.width}px`,
      height: (props) => `${props.height - props.noLegend ? 0 : 60}px`
    },
    '& .legend': {
      height: '55px',
      maxHeight: '55px',
      marginTop: '5px',
      overflowY: 'auto',
      display: 'flex',
      alignItems: 'center'
    }
  }
};

const useStyles = createUseStyles(styles);

export const withChartContainer = (Component: ComponentType<any>) => {
  const ChartContainer = forwardRef((props: ChartBaseProps, ref: Ref<any>) => {
    const { style, className, tooltip, loading, datasets, slot, noLegend, height, ...rest } = props;

    const classes = useStyles(props);
    let classNames = classes.chart;
    if (className) {
      classNames = `${classNames} ${className}`;
    }

    const loadingIndicator = useMemo(() => {
      return getLoadingState(loading, datasets, (Component as any).LoadingPlaceholder);
    }, [loading, datasets, Component]);

    const inlineStyle: CSSProperties = useMemo(
      () => ({
        position: 'relative',
        paddingTop: '6px',
        width: `${props.width}px`,
        height: `${props.height}px`,
        ...style
      }),
      [props.width, props.height, style]
    );

    const chartHeight = useMemo(() => (noLegend ? height : height - 60), [noLegend, height]);

    return (
      <div className={classNames} style={inlineStyle} title={tooltip} slot={slot}>
        {loadingIndicator}
        {datasets.length > 0 && (
          <Component
            {...rest}
            noLegend={noLegend}
            height={chartHeight}
            ref={ref}
            datasets={datasets}
            loading={loading}
          />
        )}
      </div>
    );
  });

  ChartContainer.defaultProps = Component.defaultProps;
  ChartContainer.displayName = Component.displayName;

  return ChartContainer;
};
