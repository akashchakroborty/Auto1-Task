import React from 'react';
import { shallow } from 'enzyme';
import { CarDetialsProps, CarDetail } from '..';
import { MOCK_CARS_DATA } from '../../../Constants/testData';

describe('should test the CarDetail Component', () => {
  const setFavorites = jest.fn();
  const mockProps: CarDetialsProps = {
    getCarDetails: jest.fn(),
    clearCarDetails: jest.fn(),
    carDetails: {
      loading: false,
      error: false,
      data: MOCK_CARS_DATA.cars[0],
    },
    match: {
      params: { id: '97074' },
    },
  };
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    React.useState = jest.fn().mockReturnValue([[], () => {}]);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should render the component', () => {
    const wrapper = shallow(<CarDetail {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should test handleFavoriteButtonClick function to save', () => {
    React.useState = jest.fn().mockReturnValue([[], setFavorites]);
    const wrapper = shallow(<CarDetail {...mockProps} />);
    wrapper.find('#favoriteButton').simulate('click');
    expect(setFavorites).toHaveBeenCalled();
  });
  test('should test handleFavoriteButtonClick function to remove', () => {
    React.useState = jest.fn().mockReturnValue([[97074], setFavorites]);
    const wrapper = shallow(<CarDetail {...mockProps} />);
    wrapper.find('#favoriteButton').simulate('click');
    expect(setFavorites).toHaveBeenCalled();
  });
});
