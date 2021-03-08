import { render } from '@shared/tests';
import { SuggestionItem } from '@ui5/webcomponents-react/dist/SuggestionItem';
import React from 'react';

describe('SuggestionItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SuggestionItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
