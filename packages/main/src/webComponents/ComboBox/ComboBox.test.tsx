import { render } from '@shared/tests';
import { ComboBox } from '@ui5/webcomponents-react/dist/ComboBox';
import React from 'react';

describe('ComboBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
