import React from 'react';
import { shallow } from 'enzyme';
import App from "..";

describe('should test the App Component', () => {
  test('should render the component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
