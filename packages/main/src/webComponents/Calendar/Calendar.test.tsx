import { render } from '@shared/tests';
import { Calendar } from '@ui5/webcomponents-react/dist/Calendar';
import React from 'react';

describe('Calendar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
