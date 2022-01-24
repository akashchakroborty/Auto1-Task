import React from 'react';
import { shallow } from 'enzyme';
import Filters, { FiltersProps } from '..';
import { MOCK_COLORS, MOCK_MANUFACTURERS } from '../../../Constants/testData';

describe('should test the Filters Component', () => {
  const mockProps: FiltersProps = {
    getCars: jest.fn(),
    setFilters: jest.fn(),
    getColors: jest.fn(),
    getManufacturers: jest.fn(),
    manufacturers: MOCK_MANUFACTURERS.manufacturers,
    colors: MOCK_COLORS.colors,
    activeFilters: { page: 1, sort: 'asc' },
  };
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });
  test('should render the component', () => {
    const wrapper = shallow(<Filters {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should test handleColorChange function', () => {
    const wrapper = shallow(<Filters {...mockProps} />);
    wrapper.find('#colorFilterSelect').simulate('change', { target: { value: 'pink' } });
    expect(mockProps.setFilters).toHaveBeenCalledWith({ color: 'pink' });
  });
  test('should test handleManufacturerChange function', () => {
    const wrapper = shallow(<Filters {...mockProps} />);
    wrapper.find('#manufacturerFilterSelect').simulate('change', { target: { value: 'Audi' } });
    expect(mockProps.setFilters).toHaveBeenCalledWith({ manufacturer: 'Audi' });
  });
  test('should test handleSubmit function', () => {
    const wrapper = shallow(<Filters {...mockProps} />);
    wrapper.find('#filterButton').simulate('click', { preventDefault: jest.fn() });
    expect(mockProps.setFilters).toHaveBeenCalledWith({ page: 1 });
    expect(mockProps.getCars).toHaveBeenCalled();
  });
});
