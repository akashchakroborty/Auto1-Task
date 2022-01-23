import React from 'react';
import { shallow } from 'enzyme';
import Error404 from '..';

describe('should test the Error404 Component', () => {
  test('should render the component', () => {
    const component = shallow(<Error404 />);
    expect(component).toMatchSnapshot();
  });
});
