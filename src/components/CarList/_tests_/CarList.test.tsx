import React from 'react';
import { shallow } from 'enzyme';
import CarList, { CarListProps } from '..';
import { MOCK_CARS_DATA } from '../../../Constants/testData';

describe('should test the CarList Component', () => {
  const mockProps: CarListProps = {
    setFilters: jest.fn(),
    getCars: jest.fn(),
    cars: MOCK_CARS_DATA.cars,
    error: false,
    totalCarsCount: MOCK_CARS_DATA.totalCarsCount,
    loading: false,
    totalPageCount: MOCK_CARS_DATA.totalPageCount,
    activeFilters: { page: 1, sort: 'asc' },
  };
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });
  test('should render the component', () => {
    const wrapper = shallow(<CarList {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#errorAlert').exists()).toBe(false);
    expect(wrapper.find('CarListItemSkeleton').exists()).toBe(false);
  });
  test('should test handlePaginationChange function', () => {
    const wrapper = shallow(<CarList {...mockProps} />);
    wrapper.find('#pagination').simulate('change', 2);
    expect(mockProps.setFilters).toHaveBeenCalled();
    expect(mockProps.getCars).toHaveBeenCalled();
  });
  test('should render the skeleton component in case of loading', () => {
    const newMockProps = { ...mockProps, loading: true };
    const wrapper = shallow(<CarList {...newMockProps} />);
    expect(wrapper.find('CarListItemSkeleton').exists()).toBe(true);
  });
  test('should render the alert component in case of error', () => {
    const newMockProps = { ...mockProps, error: true };
    const wrapper = shallow(<CarList {...newMockProps} />);
    expect(wrapper.find('#errorAlert').exists()).toBe(true);
  });
});
