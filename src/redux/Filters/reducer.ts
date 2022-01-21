import { FiltersActionTypes } from '../types/filtersActionTypes';
import { FiltersState } from '../types/filtersTypes';
import { GET_COLORS, GET_MANUFACTURERS, SET_FILTERS } from './constants';

export const defaultState: FiltersState = {
  colors: [],
  manufacturers: [],
  activeFilters: {
    page: 1,
    sort: 'asc',
  },
};

const filtersReducer = (state = defaultState, action: FiltersActionTypes): FiltersState => {
  switch (action.type) {
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    case GET_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload,
      };
    case SET_FILTERS:
      return {
        ...state,
        activeFilters: { ...state.activeFilters, ...action.payload },
      };
    default:
      return state;
  }
};

export default filtersReducer;
