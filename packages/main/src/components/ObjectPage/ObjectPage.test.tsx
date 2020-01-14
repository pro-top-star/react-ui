import { createPassThroughPropsTest, getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React from 'react';
import * as sinon from 'sinon';

const renderHeaderContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Link href="https://www.sap.com">www.myurl.com</Link>
    <Text>Address 1</Text>
    <Text>Address 2</Text>
    <Text>Address 3</Text>
  </div>
);

const renderComponent = (mode = ObjectPageMode.Default) => (
  <ObjectPage
    title="Fiori Object Page Title"
    subTitle="Sub Title"
    headerActions={[<Button key="Actions">Action</Button>]}
    renderHeaderContent={renderHeaderContent}
    showHideHeaderButton
    mode={mode}
  >
    <ObjectPageSection title="Test 1" id="1">
      <Label>My Content 1</Label>
    </ObjectPageSection>
    <ObjectPageSection title="Test 2" id="2">
      <div style={{ height: '800px' }}>Test2</div>
    </ObjectPageSection>
    <ObjectPageSection title="Test 3" id="3">
      Test1
    </ObjectPageSection>
    <ObjectPageSection title="Test 4" id="4">
      <h1>Section 4</h1>
      <ObjectPageSubSection title="SubSection 4.1" id="4.1">
        Test 4 SubSection 1
      </ObjectPageSubSection>
      <ObjectPageSubSection title="SubSection 4.2" id="4.2">
        Test 4 SubSection 2
      </ObjectPageSubSection>
    </ObjectPageSection>
    <ObjectPageSection title="Test 5" id="5">
      <ObjectPageSubSection title="SubSection 5.1" id="5.1">
        Content of SubSection 5.1
      </ObjectPageSubSection>
      <ObjectPageSubSection title="SubSection 5.2" id="5.2">
        Content of SubSection 5.2
      </ObjectPageSubSection>
    </ObjectPageSection>
  </ObjectPage>
);

const renderComponentWithSections = () => (
  <ObjectPage
    title="Fiori Object Page Title"
    subTitle="Sub Title"
    headerActions={[<Button key="Actions">Action</Button>]}
    renderHeaderContent={renderHeaderContent}
    mode={ObjectPageMode.Default}
  >
    <ObjectPageSection title="Test 1" id="1">
      <Label>My Content 1</Label>
    </ObjectPageSection>
    <ObjectPageSection title="Test 2" id="2">
      <Label>My Content 2</Label>
    </ObjectPageSection>
    <ObjectPageSection title="Test 3" id="3">
      <Label>My Content 3</Label>
    </ObjectPageSection>
  </ObjectPage>
);

describe('ObjectPage', () => {
  test('With Subsections', () => {
    const wrapper = mountThemedComponent(renderComponent(), {}, { attachTo: document.body });
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Only Sections', () => {
    const wrapper = mountThemedComponent(renderComponentWithSections());
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('IconTabBar Mode', () => {
    const wrapper = mountThemedComponent(renderComponent(ObjectPageMode.IconTabBar));
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Just Some Sections', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Not crashing with 1 section - Default Mode', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
      </ObjectPage>
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Not crashing with 1 section - IconTabBar Mode', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
      </ObjectPage>
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Not crashing with 0 sections', () => {
    const wrapper = mountThemedComponent(<ObjectPage mode={ObjectPageMode.IconTabBar} />);

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Set selected section id', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage selectedSectionId={'2'} mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test.skip('onSelectedSectionChangedHandler', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(
      <ObjectPage selectedSectionId={'2'} mode={ObjectPageMode.IconTabBar} onSelectedSectionChanged={callback}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );
    wrapper
      .find('section[role="navigation"] ui5-button')
      .first()
      .simulate('click');
    expect(getEventFromCallback(callback).getParameter('selectedSectionId')).toEqual('1');
  });

  test('No Header', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage selectedSectionId={'2'} noHeader>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  const renderKeyInfos = () => (
    <>
      <div>
        <Title level={TitleLevel.H5}>Key Info 1</Title>
        <Text>Value 1</Text>
      </div>
      <div>
        <Title level={TitleLevel.H5}>Key Info 2</Title>
        <Text>Value 2</Text>
      </div>
      <div>
        <Title level={TitleLevel.H5}>Key Info 3</Title>
        <Text>Value 3</Text>
      </div>
    </>
  );

  const renderBreadcrumbs = () => (
    <Breadcrumbs>
      <Link href="PathSegment1">Path1</Link>
      <Link href="PathSegment2">Path2</Link>
      <Link href="PathSegment3"></Link>
    </Breadcrumbs>
  );

  test('Key Infos', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage renderKeyInfos={renderKeyInfos} renderBreadcrumbs={renderBreadcrumbs}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(ObjectPage);
});
