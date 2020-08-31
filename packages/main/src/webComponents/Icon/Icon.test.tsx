import '@ui5/webcomponents-icons/dist/icons/add';
import { render } from '@shared/tests';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Icon name="add" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
