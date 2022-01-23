/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '..';

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

describe('should test the Footer Component', () => {
  test('should render the component', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
