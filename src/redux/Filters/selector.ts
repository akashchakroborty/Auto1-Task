import { AppState } from '../store';
import { CarsRequest } from '../types/carsTypes';
import { Manufacturer } from '../types/filtersTypes';

export const selectActiveFilters = (state: AppState): CarsRequest => state.filters.activeFilters;

export const selectColors = (state: AppState): string[] => state.filters.colors;

export const selectManufacturers = (state: AppState): Manufacturer[] => state.filters.manufacturers;
