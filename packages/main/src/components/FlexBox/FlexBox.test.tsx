import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import * as React from 'react';

describe('FlexBox', () => {
  test('JustifyContent: End', () => {
    const wrapper = mountThemedComponent(
      <FlexBox justifyContent={FlexBoxJustifyContent.End}>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).justifyContent).toEqual('flex-end');
  });

  test('Height and Width', () => {
    const wrapper = mountThemedComponent(
      <FlexBox height="1337px" width="42px">
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).height).toEqual('1337px');
    expect(window.getComputedStyle(node).width).toEqual('42px');
  });

  test('Display: Inline', () => {
    const wrapper = mountThemedComponent(
      <FlexBox displayInline>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).display).toEqual('inline-flex');
  });

  test('with Custom Class Names and Style', () => {
    const wrapper = mountThemedComponent(
      <FlexBox className="testClass" style={{ backgroundColor: '#000' }}>
        <span>Test 1</span>
      </FlexBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(FlexBox);
});
