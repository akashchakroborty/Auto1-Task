import { selectActiveFilters, selectColors, selectManufacturers } from '../selector';
import { mockState } from '../../Cars/_tests_/selector.test';

describe('Filter Selector', () => {
  it('Test Filter selectors', () => {
    expect(selectActiveFilters(mockState)).toEqual(mockState.filters.activeFilters);

    expect(selectColors(mockState)).toEqual(mockState.filters.colors);

    expect(selectManufacturers(mockState)).toEqual(mockState.filters.manufacturers);
  });
});
