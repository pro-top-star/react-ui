import { useCallback, useEffect, useState } from 'react';
import { Device } from '@ui5/webcomponents-react-base/lib/Device';

export const useViewportRange = (rangeSet) => {
  const [currentRange, setCurrentRange] = useState(Device.media.getCurrentRange(rangeSet, window.innerWidth).name);

  const onWindowResize = useCallback(
    ({ name: range }) => {
      setCurrentRange(range);
    },
    [currentRange, setCurrentRange]
  );

  useEffect(() => {
    Device.media.attachHandler(onWindowResize, null, 'StdExt');
    return () => Device.resize.detachHandler(onWindowResize, null);
  }, [onWindowResize]);

  return currentRange;
};
