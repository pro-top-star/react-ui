import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { AnalyticalCard } from '@ui5/webcomponents-react/lib/AnalyticalCard';
import { AnalyticalCardHeader } from '@ui5/webcomponents-react/lib/AnalyticalCardHeader';
import { DeviationIndicator } from '@ui5/webcomponents-react/lib/DeviationIndicator';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

const Header = (
  <AnalyticalCardHeader
    title="Title"
    subTitle="Subtitle"
    arrowIndicator={DeviationIndicator.Down}
    indicatorState={ValueState.Success}
    value="Value"
    valueState={ValueState.Success}
    unit="Unit"
    target="Target"
    deviation="Deviation"
    showIndicator
    description="Description"
  />
);

// TODO Add more tests
describe('Analytical Card', () => {
  test('Render without Crashing', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalCard header={Header}>
        <Text>I'm a content!</Text>
      </AnalyticalCard>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(AnalyticalCard);
});
