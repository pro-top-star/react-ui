import { createUseStyles } from 'react-jss';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Label, LabelPropTypes } from '@ui5/webcomponents-react/lib/Label';
import React, { cloneElement, CSSProperties, FC, isValidElement, ReactElement, ReactNode, ReactNodeArray } from 'react';

export interface FormItemProps {
  /**
   * Label of the FormItem. Can be either a string or a `Label` component.
   */
  label?: string | ReactElement;
  /**
   * Content of the FormItem. Can be an arbitrary React Node.
   */
  children: ReactNode | ReactNodeArray;
}

interface InternalProps extends FormItemProps {
  columnIndex?: number;
  labelSpan?: number;
  rowIndex?: number;
}

const useStyles = createUseStyles(
  {
    label: {
      gridColumnEnd: 'span var(--ui5wcr_form_label_span)',
      justifySelf: 'var(--ui5wcr_form_label_text_align)',
      textAlign: 'var(--ui5wcr_form_label_text_align)'
    },
    content: {
      gridColumnEnd: 'span var(--ui5wcr_form_content_span)'
    }
  },
  { name: 'FormItem' }
);

const renderLabel = (
  label: string | ReactElement,
  classes: Record<'label' | 'content', string>,
  styles: CSSProperties
) => {
  if (typeof label === 'string') {
    return (
      <Label className={classes.label} style={styles} wrap>
        {label ? `${label}:` : ''}
      </Label>
    );
  }

  if (isValidElement(label)) {
    return cloneElement<LabelPropTypes>(
      label,
      {
        wrap: (label as ReactElement<LabelPropTypes>).props.wrap ?? true,
        className: `${classes.label} ${(label as ReactElement<LabelPropTypes>).props.className ?? ''}`,
        style: {
          gridColumnStart: styles.gridColumnStart,
          gridRowStart: styles.gridRowStart,
          ...((label as ReactElement<LabelPropTypes>).props.style || {})
        }
      },
      (label as ReactElement<LabelPropTypes>).props.children
        ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${(label as ReactElement<LabelPropTypes>).props.children}:`
        : ''
    );
  }

  return null;
};
/**
 * The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.
 */
const FormItem: FC<FormItemProps> = (props: FormItemProps) => {
  const { label, children, columnIndex, rowIndex, labelSpan } = props as InternalProps;

  const classes = useStyles();

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;
  const gridRowStart = rowIndex ?? 0;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  if (labelSpan === 12) {
    return (
      <FlexBox
        direction={FlexBoxDirection.Column}
        alignItems={FlexBoxAlignItems.Start}
        style={{ gridColumnStart, gridRowStart, gridColumnEnd: 'span 12', placeItems: 'flex-start' }}
      >
        {renderLabel(label, classes, {})}
        {children}
      </FlexBox>
    );
  }

  return (
    <>
      {renderLabel(label, classes, { gridColumnStart, gridRowStart })}
      <div
        className={classes.content}
        style={{
          gridColumnStart: contentGridColumnStart,
          gridRowStart: labelSpan === 12 ? gridRowStart + 1 : gridRowStart
        }}
      >
        {children}
      </div>
    </>
  );
};

FormItem.displayName = 'FormItem';

export { FormItem };
