import { render } from '@shared/tests';
import { UploadCollectionItem } from '@ui5/webcomponents-react/dist/UploadCollectionItem';
import React from 'react';

describe('UploadCollectionItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<UploadCollectionItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
