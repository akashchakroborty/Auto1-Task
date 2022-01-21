import { GET_COLORS, GET_MANUFACTURERS, SET_FILTERS } from '../Filters/constants';
import { CarsRequest } from './carsTypes';
import { Manufacturer } from './filtersTypes';

export interface GetColors {
  type: typeof GET_COLORS;
  payload: string[];
}

export interface GetManufacturers {
  type: typeof GET_MANUFACTURERS;
  payload: Manufacturer[];
}

export interface SetFilters {
  type: typeof SET_FILTERS;
  payload: CarsRequest;
}

export type FiltersActionTypes = GetColors | GetManufacturers | SetFilters;
