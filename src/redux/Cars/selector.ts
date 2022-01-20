import { AppState } from '../store';
import { Car } from '../types/carsTypes';

export const selectCars = (state: AppState): Car[] => state.cars.data;

export const selectIsCarsLoading = (state: AppState): boolean => state.cars.loading;

export const selectIsError = (state: AppState): boolean => state.cars.error;

export const selectTotalCarsCount = (state: AppState): number => state.cars.totalCarsCount;

export const selectTotalPageCount = (state: AppState): number => state.cars.totalPageCount;
