import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/lib/BreadcrumbsSeparatorStyle';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import React from 'react';

describe('Breadcrumbs', () => {
  Object.values(BreadcrumbsSeparatorStyle).forEach((style) => {
    test(`separatorStyle: '${style}'`, () => {
      const wrapper = mountThemedComponent(
        <Breadcrumbs separatorStyle={style}>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </Breadcrumbs>
      );
      expect(wrapper.render()).toMatchSnapshot();
    });
  });

  test('with currentLocationText', () => {
    const wrapper = mountThemedComponent(
      <Breadcrumbs currentLocationText="Current Location">
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Link>Link 3</Link>
      </Breadcrumbs>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Breadcrumbs);
});
