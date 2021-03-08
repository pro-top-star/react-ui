import { render } from '@shared/tests';
import { TableRow } from '@ui5/webcomponents-react/dist/TableRow';
import React from 'react';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableRow />);
    expect(asFragment()).toMatchSnapshot();
  });
});
