import { CarsRequest } from './carsTypes';

export interface Manufacturer {
  name: string;
  models: { name: string }[];
}

export interface FiltersState {
  colors: string[];
  manufacturers: Manufacturer[];
  activeFilters: CarsRequest;
}
