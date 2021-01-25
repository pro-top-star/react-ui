import { createUseStyles } from 'react-jss';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { BreadcrumbsPropTypes } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarSeparator } from '@ui5/webcomponents-react/lib/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React, { Children, FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { DynamicPageTitleStyles } from './DynamicPageTitle.jss';

export interface DynamicPageTitleProps extends CommonProps {
  /**
   * The `DynamicPageTitle` actions.
   */
  actions?: ReactElement | ReactElement[];

  /**
   * The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.
   */
  breadcrumbs?: ReactElement<BreadcrumbsPropTypes>;

  /**
   * The content is positioned in the `DynamicPageTitle` middle area
   */
  children?: ReactNode | ReactNodeArray;

  /**
   * The `heading` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a heading)
   */
  heading?: ReactNode;
  /**
   * The `heading` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a heading)
   */
  subHeading?: ReactNode;
  /**
   * The `DynamicPageTitle` navigation actions.<br />
   * *Note*: The `navigationActions` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the actions.
   * Otherwise, they are rendered in the top-right area, above the actions.
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.
   *
   */
  navigationActions?: ReactElement | ReactElement[];
}

interface InternalProps extends DynamicPageTitleProps {
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   */
  onToggleHeaderContentVisibility?: (e: any) => boolean;
}

const useStyles = createUseStyles(DynamicPageTitleStyles, { name: 'DynamicPageTitle' });

/**
 * The dynamic page title defines the elements in the top header.
 * It can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.
 */
const DynamicPageTitle: FC<DynamicPageTitleProps> = forwardRef((props: InternalProps, ref: Ref<HTMLDivElement>) => {
  const {
    actions,
    onToggleHeaderContentVisibility,
    breadcrumbs,
    children,
    heading,
    subHeading,
    navigationActions,
    className,
    style,
    tooltip
  } = props;

  const classes = useStyles();
  const containerClasses = StyleClassHelper.of(classes.container).putIfPresent(className);
  const passThroughProps = usePassThroughHtmlProps(props, ['onToggleHeaderContentVisibility']);

  return (
    <FlexBox
      className={containerClasses.className}
      style={style}
      ref={ref}
      tooltip={tooltip}
      data-component-name="DynamicPageTitle"
      onClick={onToggleHeaderContentVisibility}
      {...passThroughProps}
    >
      <div className={classes.breadcrumbs}>{breadcrumbs}</div>
      <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ flexGrow: 1, width: '100%' }}>
        <FlexBox className={classes.titleMainSection}>
          <div className={classes.title}>{heading}</div>
          <div className={classes.content}>
            <Toolbar toolbarStyle={ToolbarStyle.Clear}>{children}</Toolbar>
          </div>
        </FlexBox>
        <Toolbar design={ToolbarDesign.Auto} toolbarStyle={ToolbarStyle.Clear}>
          <ToolbarSpacer />
          {actions}
          {Children.count(actions) > 0 && Children.count(navigationActions) > 0 && <ToolbarSeparator />}
          {navigationActions}
        </Toolbar>
      </FlexBox>
      <FlexBox>
        <div className={classes.subTitle}>{subHeading}</div>
      </FlexBox>
    </FlexBox>
  );
});

DynamicPageTitle.displayName = 'DynamicPageTitle';

export { DynamicPageTitle };
