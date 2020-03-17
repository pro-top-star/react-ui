import { mount } from 'enzyme';
import * as React from 'react';
import { RadialChart } from './RadialChart';

describe('RadialChart', () => {
  test('Renders with data', () => {
    expect(mount(<RadialChart width={'100%'} value={67} displayValue={'67%'} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<RadialChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
