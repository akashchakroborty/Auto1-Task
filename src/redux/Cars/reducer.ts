import { CarsActionTypes } from '../types/carsActionTypes';
import { CarsState } from '../types/carsTypes';
import {
  CLEAR_CAR_DETAILS,
  GET_CARS_FAILURE,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  GET_CAR_DETAILS_FAILURE,
  GET_CAR_DETAILS_LOADING,
  GET_CAR_DETAILS_SUCCESS,
} from './constants';

export const defaultState: CarsState = {
  data: [],
  totalCarsCount: 0,
  totalPageCount: 0,
  loading: false,
  error: false,
  carDetails: {
    loading: false,
    error: false,
  },
};

const carsReducer = (state = defaultState, action: CarsActionTypes): CarsState => {
  switch (action.type) {
    case GET_CARS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        ...defaultState,
        data: action.payload.cars,
        totalCarsCount: action.payload.totalCarsCount,
        totalPageCount: action.payload.totalPageCount,
      };
    case GET_CARS_FAILURE:
      return {
        ...state,
        ...defaultState,
        error: true,
      };
    case GET_CAR_DETAILS_LOADING:
      return {
        ...state,
        carDetails: { ...defaultState.carDetails, loading: action.payload },
      };
    case GET_CAR_DETAILS_SUCCESS:
      return {
        ...state,
        carDetails: { ...defaultState.carDetails, data: action.payload },
      };
    case GET_CAR_DETAILS_FAILURE:
      return {
        ...state,
        carDetails: { ...defaultState.carDetails, error: true },
      };
    case CLEAR_CAR_DETAILS:
      return {
        ...state,
        carDetails: { ...defaultState.carDetails },
      };
    default:
      return state;
  }
};

export default carsReducer;
