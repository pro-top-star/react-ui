import { render } from '@shared/tests';
import { RangeSlider } from '@ui5/webcomponents-react/dist/RangeSlider';
import React from 'react';

describe('RangeSlider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RangeSlider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
