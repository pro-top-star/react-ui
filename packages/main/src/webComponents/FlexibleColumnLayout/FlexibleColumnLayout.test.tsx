import { render } from '@shared/tests';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react/dist/FlexibleColumnLayout';
import React from 'react';

describe('FlexibleColumnLayout', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FlexibleColumnLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
