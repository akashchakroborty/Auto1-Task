import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '..';

describe('should test the Dashboard Component', () => {
  test('should render the component', () => {
    const component = shallow(<Dashboard />);
    expect(component).toMatchSnapshot();
  });
});
