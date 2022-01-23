import { MOCK_COLORS, MOCK_MANUFACTURERS } from '../../../Constants/testData';
import { GET_COLORS, GET_MANUFACTURERS, SET_FILTERS } from '../constants';
import carsReducer, { defaultState } from '../reducer';

describe('filtersReducer', () => {
  it('should return initial state', () => {
    expect(carsReducer(undefined, { type: null })).toEqual(defaultState);
  });

  it('should set colors when getColors success is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_COLORS,
        payload: MOCK_COLORS.colors,
      }).colors,
    ).toStrictEqual(MOCK_COLORS.colors);
  });

  it('should set manufacturers when getManufacturers success is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_MANUFACTURERS,
        payload: MOCK_MANUFACTURERS.manufacturers,
      }).manufacturers,
    ).toStrictEqual(MOCK_MANUFACTURERS.manufacturers);
  });

  it('should set filters when setFilters is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: SET_FILTERS,
        payload: { page: 3, sort: 'asc' },
      }).activeFilters,
    ).toStrictEqual({ page: 3, sort: 'asc' });
  });
});
