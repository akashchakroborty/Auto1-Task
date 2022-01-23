/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '..';

jest.mock('@mui/styles', () => {
  const Styles = jest.requireActual('@mui/styles');
  const theme = { palette: { divider: {} } };

  return {
    ...Styles,
    makeStyles: (func: any) => {
      return Styles.makeStyles(func.bind(null, theme));
    },
  };
});

describe('should test the Header Component', () => {
  test('should render the component', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
