import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './Avatar.jss';

export interface AvatarPropTypes extends CommonProps {
  size?: AvatarSize;
  shape?: AvatarShape;
  initials?: string;
  image?: string;
  onClick?: (event: Event) => void;
  children?: JSX.Element;
  customDisplaySize?: CSSProperties['width'];
  customFontSize?: CSSProperties['width'];
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Avatar' });

/**
 * <code>import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';</code>
 */
const Avatar: FC<AvatarPropTypes> = forwardRef((props: AvatarPropTypes, ref: Ref<HTMLSpanElement>) => {
  const {
    initials,
    size,
    shape,
    image,
    onClick,
    customFontSize,
    customDisplaySize,
    children,
    className,
    style,
    tooltip,
    slot
  } = props;
  const classes = useStyles({ customDisplaySize, customFontSize });

  const cssClasses = [classes.avatar, classes[`size${size}`]];

  if (shape === AvatarShape.Circle) {
    cssClasses.push(classes.circle);
  }

  const inlineStyle = useMemo(() => {
    const internalStyle: CSSProperties = {};
    if (image) {
      internalStyle.backgroundImage = `url(${image})`;
    }

    if (onClick) {
      internalStyle.cursor = 'pointer';
    }

    if (style) {
      Object.assign(internalStyle, style);
    }

    return internalStyle;
  }, [image, onClick, style]);

  if (className) {
    cssClasses.push(className);
  }

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onClick?.(Event.of(null, e));
      }
    },
    [onClick]
  );

  const handleOnClick = useCallback(
    (e) => {
      onClick?.(Event.of(null, e));
    },
    [onClick]
  );

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <span
      ref={ref}
      className={cssClasses.join(' ')}
      style={inlineStyle}
      onClick={handleOnClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
    >
      {initials ? initials : children}
    </span>
  );
});

Avatar.defaultProps = {
  size: AvatarSize.S,
  shape: AvatarShape.Circle,
  initials: null,
  image: null,
  onClick: null,
  customDisplaySize: '3rem',
  customFontSize: '1.125rem'
};

Avatar.displayName = 'Avatar';

export { Avatar };
