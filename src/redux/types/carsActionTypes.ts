import { GET_CARS_LOADING, GET_CARS_SUCCESS, GET_CARS_FAILURE } from '../Cars/constants';
import { CarsResponse } from './carsTypes';

export interface GetCarsLoading {
  type: typeof GET_CARS_LOADING;
  payload: boolean;
}

export interface GetCarsSuccess {
  type: typeof GET_CARS_SUCCESS;
  payload: CarsResponse;
}

export interface GetCarsFailure {
  type: typeof GET_CARS_FAILURE;
}

export type CarsActionTypes = GetCarsLoading | GetCarsSuccess | GetCarsFailure;
