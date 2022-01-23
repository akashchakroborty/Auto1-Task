import {
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
  GET_CAR_DETAILS_LOADING,
  GET_CAR_DETAILS_SUCCESS,
  GET_CAR_DETAILS_FAILURE,
  CLEAR_CAR_DETAILS,
} from '../Cars/constants';
import { Car, CarsResponse } from './carsTypes';

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

export interface GetCarDetailsLoading {
  type: typeof GET_CAR_DETAILS_LOADING;
  payload: boolean;
}

export interface GetCarDetailsSuccess {
  type: typeof GET_CAR_DETAILS_SUCCESS;
  payload: Car;
}

export interface GetCarDETAILSFailure {
  type: typeof GET_CAR_DETAILS_FAILURE;
}
export interface ClearCarDetails {
  type: typeof CLEAR_CAR_DETAILS;
}

export interface CarsInvalid {
  type: null;
}

export type CarsActionTypes =
  | GetCarsLoading
  | GetCarsSuccess
  | GetCarsFailure
  | GetCarDetailsLoading
  | GetCarDetailsSuccess
  | GetCarDETAILSFailure
  | ClearCarDetails
  | CarsInvalid;
