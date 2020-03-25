import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { getScrollBarWidth } from '@ui5/webcomponents-react-base/lib/Utils';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import debounce from 'lodash.debounce';
import React, {
  FC,
  forwardRef,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  ComponentType
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { ObjectPageSectionPropTypes } from '../ObjectPageSection';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';
import { CollapsedAvatar } from './CollapsedAvatar';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorBar } from './ObjectPageAnchorBar';
import { ObjectPageHeader } from './ObjectPageHeader';
import { extractSectionIdFromHtmlId, getSectionById, safeGetChildrenArray } from './ObjectPageUtils';
import { useObserveHeights } from './useObserveHeights';

declare const ResizeObserver;

const SCROLL_BAR_WIDTH = 12;

export interface ObjectPagePropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  image?: string | ReactElement<unknown>;
  headerActions?: ReactElement<unknown>[];
  renderHeaderContent?: () => JSX.Element;
  children?: ReactElement<ObjectPageSectionPropTypes> | ReactElement<ObjectPageSectionPropTypes>[];

  selectedSectionId?: string;
  selectedSubSectionId?: string;
  onSelectedSectionChanged?: (
    event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: ComponentType }>
  ) => void;

  renderBreadcrumbs?: () => JSX.Element;
  renderKeyInfos?: () => JSX.Element;

  // appearance
  alwaysShowContentHeader?: boolean;
  showTitleInHeaderContent?: boolean;
  imageShapeCircle?: boolean;
  mode?: ObjectPageMode;
  noHeader?: boolean;
  showHideHeaderButton?: boolean;
  headerContentPinnable?: boolean;
}

const useStyles = createComponentStyles(styles, { name: 'ObjectPage' });

/**
 * <code>import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';</code>
 */
const ObjectPage: FC<ObjectPagePropTypes> = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    title = '',
    image = null,
    subTitle = '',
    headerActions = [],
    renderHeaderContent = null,
    mode = ObjectPageMode.Default,
    imageShapeCircle = false,
    className,
    style,
    tooltip,
    slot,
    showHideHeaderButton = false,
    children,
    onSelectedSectionChanged = () => {
      /* noop */
    },
    selectedSectionId,
    noHeader = false,
    alwaysShowContentHeader,
    showTitleInHeaderContent,
    renderBreadcrumbs,
    renderKeyInfos,
    headerContentPinnable
  } = props;

  const firstSectionId = safeGetChildrenArray(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const isProgrammaticallyScrolled = useRef(false);

  const objectPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();
  const anchorBarRef: RefObject<HTMLDivElement> = useRef();

  const [scrollbarWidth, setScrollbarWidth] = useState(SCROLL_BAR_WIDTH);
  const isMounted = useRef(false);

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
    objectPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader }
  );

  // *****
  // SECTION SELECTION
  // ****

  const scrollToSection = useCallback(
    (sectionId) => {
      if (!sectionId) {
        return;
      }
      if (firstSectionId === sectionId) {
        objectPageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const childOffset = objectPageRef.current.querySelector<HTMLElement>(`#ObjectPageSection-${sectionId}`)
          ?.offsetTop;
        if (!isNaN(childOffset)) {
          objectPageRef.current.scrollTo({
            top: childOffset - topHeaderHeight - anchorBarHeight - (headerPinned ? headerContentHeight : 0) + 45,
            behavior: 'smooth'
          });
        }
      }
      isProgrammaticallyScrolled.current = false;
    },
    [firstSectionId, objectPageRef, topHeaderHeight, anchorBarHeight, headerPinned, headerContentHeight]
  );

  // change selected section when prop is changed (external change)
  useEffect(() => {
    isProgrammaticallyScrolled.current = true;
    setInternalSelectedSectionId(selectedSectionId ?? firstSectionId);
  }, [selectedSectionId, isProgrammaticallyScrolled, firstSectionId]);

  // section was selected by clicking on the anchor bar buttons
  const handleOnSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      const newSelectionSection = e.detail.props?.id;
      setInternalSelectedSectionId((oldSelectedSection) => {
        if (oldSelectedSection === newSelectionSection) {
          scrollToSection(newSelectionSection);
        }
        return newSelectionSection;
      });
      fireOnSelectedChangedEvent(e);
    },
    [onSelectedSectionChanged, setInternalSelectedSectionId, isProgrammaticallyScrolled, scrollToSection]
  );

  // do internal scrolling
  useEffect(() => {
    if (!isMounted.current) return;

    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, isMounted, mode, isProgrammaticallyScrolled, scrollToSection]);

  // Scrolling for Sub Section Selection
  useEffect(() => {
    if (selectedSubSectionId && isProgrammaticallyScrolled.current === true) {
      const childOffset = objectPageRef.current.querySelector<HTMLElement>(
        `div[id="ObjectPageSubSection-${selectedSubSectionId}"]`
      )?.offsetTop;
      if (!isNaN(childOffset)) {
        objectPageRef.current.scrollTo({
          top: childOffset - topHeaderHeight - anchorBarHeight - (headerPinned ? headerContentHeight : 0) + 45,
          behavior: 'smooth'
        });
      }

      isProgrammaticallyScrolled.current = false;
    }
  }, [
    selectedSubSectionId,
    isProgrammaticallyScrolled,
    topHeaderHeight,
    anchorBarHeight,
    headerPinned,
    headerContentHeight
  ]);

  useEffect(() => {
    setHeaderPinned(alwaysShowContentHeader);
  }, [setHeaderPinned, alwaysShowContentHeader]);

  const classes = useStyles();

  useEffect(() => {
    setSelectedSubSectionId(props.selectedSubSectionId);
    if (props.selectedSubSectionId) {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        let sectionId;
        safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children).forEach((section) => {
          if (React.isValidElement(section) && section.props && section.props.children) {
            safeGetChildrenArray(section.props.children).forEach(
              (subSection: ReactElement<ObjectPageSubSectionPropTypes>) => {
                if (
                  React.isValidElement(subSection) &&
                  subSection.props &&
                  subSection.props.id === props.selectedSubSectionId
                ) {
                  sectionId = section.props?.id;
                }
              }
            );
          }
        });

        if (sectionId) {
          setInternalSelectedSectionId(sectionId);
        }
      }
    }
  }, [
    props.selectedSubSectionId,
    setInternalSelectedSectionId,
    setSelectedSubSectionId,
    children,
    mode,
    isProgrammaticallyScrolled
  ]);

  useEffect(() => {
    const fillerDivObserver = new ResizeObserver(() => {
      const maxHeight = Math.min(objectPageRef.current.clientHeight, window.innerHeight);
      const availableScrollHeight = maxHeight - totalHeaderHeight;
      const sections = objectPageRef.current.querySelectorAll('[id^="ObjectPageSection"]');
      if (!sections || sections.length < 1) {
        return;
      }

      const lastSectionDomRef = sections[sections.length - 1] as HTMLElement;
      const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');

      let lastSubSectionHeight;
      if (subSections.length > 0) {
        lastSubSectionHeight = (subSections[subSections.length - 1] as HTMLElement).offsetHeight;
      } else {
        lastSubSectionHeight =
          lastSectionDomRef.offsetHeight -
          lastSectionDomRef.querySelector<HTMLElement>("[role='heading']").offsetHeight;
      }

      let heightDiff = availableScrollHeight - lastSubSectionHeight;

      heightDiff = heightDiff > 0 ? heightDiff : 0;
      lastSectionDomRef.style.marginBottom = `${heightDiff}px`;
    });

    fillerDivObserver.observe(objectPageRef.current);

    return () => {
      fillerDivObserver.disconnect();
    };
  }, [totalHeaderHeight, objectPageRef]);

  const fireOnSelectedChangedEvent = debounce((e) => {
    onSelectedSectionChanged(
      enrichEventWithDetails(e, {
        selectedSectionIndex: e.detail.index,
        selectedSectionId: e.props.id,
        section: e.detail
      })
    );
  }, 500);

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.detail.section.props?.id;
        setInternalSelectedSectionId(sectionId);
      }
      const subSection = e.detail.subSection;
      setSelectedSubSectionId(subSection.props.id);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled]
  );

  const onToggleHeaderContentVisibility = useCallback(
    (e) => {
      const srcElement = e.target;
      const shouldHideHeader = srcElement.icon === 'slim-arrow-up';
      if (shouldHideHeader) {
        objectPageRef.current.classList.add(classes.headerCollapsed);
      } else {
        objectPageRef.current.classList.remove(classes.headerCollapsed);
      }

      requestAnimationFrame(() => {
        if (objectPageRef.current.scrollTop > 0 && !shouldHideHeader) {
          const prevHeaderTop = headerContentRef.current.style.top;
          headerContentRef.current.style.top = `${topHeaderHeight}px`;
          const prevAnchorTop = anchorBarRef.current.style.top;
          anchorBarRef.current.style.top = `${headerContentRef.current.offsetHeight + topHeaderHeight}px`;
          objectPageRef.current.addEventListener(
            'scroll',
            (e) => {
              if (prevHeaderTop ?? true) {
                headerContentRef.current.style.top = prevHeaderTop;
              } else {
                headerContentRef.current.style.removeProperty('top');
              }
              if (prevAnchorTop ?? true) {
                anchorBarRef.current.style.top = prevAnchorTop;
              } else {
                anchorBarRef.current.style.removeProperty('top');
              }
            },
            { once: true }
          );
        }
      });
    },
    [objectPageRef, classes.headerCollapsed, headerContentHeight, topHeaderHeight]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      const calculatedScrollBarWidth = getScrollBarWidth();
      if (calculatedScrollBarWidth && calculatedScrollBarWidth !== 0 && calculatedScrollBarWidth !== SCROLL_BAR_WIDTH) {
        setScrollbarWidth(calculatedScrollBarWidth);
      }
    });
    isMounted.current = true;
  }, [isMounted, setScrollbarWidth]);

  const objectPageClasses = StyleClassHelper.of(classes.objectPage);
  if (className) {
    objectPageClasses.put(className);
  }

  if (showTitleInHeaderContent) {
    objectPageClasses.put(classes.titleInHeaderContent);
  }

  if (mode === ObjectPageMode.IconTabBar) {
    objectPageClasses.put(classes.iconTabBarMode);
  }

  if (noHeader) {
    objectPageClasses.put(classes.noHeader);
  }

  const scrollBarWidthPadding = useMemo(() => {
    return {
      paddingRight: `${scrollbarWidth}px`
    };
  }, [scrollbarWidth]);

  const passThroughProps = usePassThroughHtmlProps(props, ['onSelectedSectionChanged']);

  useEffect(() => {
    const objectPageHeight = objectPageRef.current?.clientHeight ?? 1000;
    const marginBottom = objectPageHeight - totalHeaderHeight;
    const rootMargin = `-${totalHeaderHeight}px 0px -${marginBottom < 0 ? 0 : marginBottom}px 0px`;
    const observer = new IntersectionObserver(
      (elements) => {
        elements.forEach((section) => {
          if (section.isIntersecting && isProgrammaticallyScrolled.current === false) {
            setInternalSelectedSectionId(extractSectionIdFromHtmlId(section.target.id));
          }
        });
      },
      {
        root: objectPageRef.current,
        rootMargin,
        threshold: [0]
      }
    );

    objectPageRef.current.querySelectorAll('section[data-component-name="ObjectPageSection"]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [objectPageRef, children, totalHeaderHeight, setInternalSelectedSectionId, isProgrammaticallyScrolled]);

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses.toString()}
      style={style}
      ref={objectPageRef}
      title={tooltip}
      {...passThroughProps}
    >
      <header
        ref={topHeaderRef}
        role="banner"
        aria-roledescription="Object Page header"
        style={scrollBarWidthPadding}
        className={classes.header}
      >
        <span className={classes.actions}>{headerActions}</span>
        <header className={classes.titleBar}>
          {(!showTitleInHeaderContent || headerContentHeight === 0) && (
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              {image && headerContentHeight === 0 && (
                <div className={classes.avatar}>
                  <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
                </div>
              )}
              <span className={classes.container}>
                <FlexBox direction={FlexBoxDirection.Column}>
                  {renderBreadcrumbs && renderBreadcrumbs()}
                  <FlexBox>
                    <h1 className={classes.title}>{title}</h1>
                    <span className={classes.subTitle}>{subTitle}</span>
                    <div className={classes.keyInfos}>{renderKeyInfos && renderKeyInfos()}</div>
                  </FlexBox>
                </FlexBox>
              </span>
            </FlexBox>
          )}
        </header>
      </header>
      <ObjectPageHeader
        image={image}
        classes={classes}
        imageShapeCircle={imageShapeCircle}
        showTitleInHeaderContent={showTitleInHeaderContent}
        renderHeaderContentProp={renderHeaderContent}
        renderBreadcrumbs={renderBreadcrumbs}
        renderKeyInfos={renderKeyInfos}
        title={title}
        subTitle={subTitle}
        headerPinned={headerPinned}
        topHeaderHeight={topHeaderHeight}
        ref={headerContentRef}
      />
      <ObjectPageAnchorBar
        sections={children}
        selectedSectionId={internalSelectedSectionId}
        handleOnSectionSelected={handleOnSectionSelected}
        handleOnSubSectionSelected={handleOnSubSectionSelected}
        headerContentPinnable={headerContentPinnable}
        showHideHeaderButton={showHideHeaderButton && !noHeader}
        headerPinned={headerPinned}
        setHeaderPinned={setHeaderPinned}
        headerContentHeight={headerContentHeight}
        style={{ top: noHeader ? 0 : headerPinned ? topHeaderHeight + headerContentHeight : topHeaderHeight }}
        onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
        ref={anchorBarRef}
        className={classes.anchorBar}
      />
      {mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : children}
    </div>
  );
});

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
