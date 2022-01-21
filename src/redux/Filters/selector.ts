import { AppState } from '../store';
import { CarsRequest } from '../types/carsTypes';

export const selectActiveFilters = (state: AppState): CarsRequest => state.filters.activeFilters;
