import { CarsActionTypes } from '../types/carsActionTypes';
import { CarsState } from '../types/carsTypes';
import { GET_CARS_FAILURE, GET_CARS_LOADING, GET_CARS_SUCCESS } from './constants';

export const defaultState: CarsState = {
  data: [],
  totalCarsCount: 0,
  totalPageCount: 0,
  loading: false,
  error: false,
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
    default:
      return state;
  }
};

export default carsReducer;
