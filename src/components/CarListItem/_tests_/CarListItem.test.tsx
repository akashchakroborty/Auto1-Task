import React from 'react';
import { shallow } from 'enzyme';
import { MOCK_CARS_DATA } from '../../../Constants/testData';
import { CarListItemProps, CarListItem, CarListItemSkeleton } from '..';

describe('should test the CarListItem Component', () => {
  const mockProps: CarListItemProps = {
    carItem: MOCK_CARS_DATA.cars[0],
  };
  test('should render the component', () => {
    const wrapper = shallow(<CarListItem {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('should test the CarListItemSkeleton Component', () => {
  test('should render the component', () => {
    const wrapper = shallow(<CarListItemSkeleton />);
    expect(wrapper).toMatchSnapshot();
  });
});
