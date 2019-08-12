import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { Page } from '@ui5/webcomponents-react/lib/Page';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { storiesOf } from '@storybook/react';
import 'highlight.js/styles/solarized-dark.css';
import Highlight from 'react-highlight.js';
import React from 'react';
import dedent from 'dedent';
import { Badges } from './Badges';

storiesOf(' Welcome | UI5 Web Components for React', module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add('What is UI5 Web Components for React', () => {
    return (
      <Page
        title="What is UI5 Web Components for React?"
        style={{ height: '300px' }}
        showBackButton={false}
        className="pageWithPadding"
      >
        <FlexBox direction={FlexBoxDirection.Column}>
          <Badges />

          <Title>Description</Title>
          <br />
          <Text>
            UI5 Web Components for React is a Fiori3 compliant React library built on top of the UI5 Web Components.
          </Text>

          <Text>
            With the help of UI5 Web Components for React, you can use UI5 Web Components as if they were native React
            components.
          </Text>
          <br />
          <Text>
            In addition to that, UI5 Web Components for React is providing complex components and layouts on top of the
            UI5 Web Components.
          </Text>
        </FlexBox>
      </Page>
    );
  })
  .add(
    'Getting Started',
    () => {
      return (
        <Page
          title="UI5 Web Components for React - Getting Started"
          style={{ height: '900px' }}
          showBackButton={false}
          className="pageWithPadding"
        >
          <FlexBox direction={FlexBoxDirection.Column}>
            <Badges />

            <Title>Requirements</Title>
            <br />
            <Text>
              In order to use ui5-webcomponents-react, you need to have Node.js and npm installed on your computer.
            </Text>
            <ul>
              <li>
                <Link href="https://nodejs.org/" target="_blank">
                  Node.js
                </Link>{' '}
                <Text>
                  <strong>version 8.5 or higher</strong>
                </Text>
              </li>
              <li>
                <Link href="https://www.npmjs.com/package/react" target="_blank">
                  React
                </Link>{' '}
                <Text>and</Text>{' '}
                <Link href="https://www.npmjs.com/package/react-dom" target="_blank">
                  React DOM
                </Link>
              </li>
            </ul>

            <Title>Installation and Configuration</Title>
            <br />
            <Text>
              To consume ui5-webcomponents-react, first you need to install the ui5-webcomponents-react npm module:
            </Text>
            <Highlight lanuage="bash">npm install @ui5/webcomponents-react --save</Highlight>

            <Text>Setup your React App</Text>
            <Text>
              You can create a new React-App by using e.g.{' '}
              <Link href="https://facebook.github.io/create-react-app/" target="_blank">
                create-react-app
              </Link>{' '}
              or add ui5-webcomponents-react to your existing app by wrapping the root component of the app into our
              ThemeProvider:
            </Text>
            <Highlight source="javascript">
              {dedent`...
              import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
              ...
              render() {
                return (
                  <ThemeProvider withToastContainer>
                    <MyApp />
                  </ThemeProvider>
                );
              }`}
            </Highlight>

            <Text>Now you can use the ui5-webcomponents-react components in your app:</Text>
            <Text>If you want to use a Button component, import it from ui5-webcomponents-react:</Text>
            <Highlight language="javascript">
              {`import { Button } from '@ui5/webcomponents-react/lib/Button'; // loads ui5-button wrapped in a ui5-webcomponents-react Component`}
            </Highlight>
            <Text>and use it in your component:</Text>
            <Highlight language="javascript">
              {`<Button onPress={() => alert('Hello World!')}>Hello world!</Button>`}
            </Highlight>
            <Text>
              You could import all components also from '@ui5/webcomponents-react' directly, but this will have a
              negative impact on your bundle size.
            </Text>

            <Title>Known Issues</Title>
            <br />
            <Link href="https://github.com/SAP/ui5-webcomponents-react/issues" target="_blank">
              GitHub Issue Board
            </Link>
          </FlexBox>
        </Page>
      );
    },
    {}
  );
