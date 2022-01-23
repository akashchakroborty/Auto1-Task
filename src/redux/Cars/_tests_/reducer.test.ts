import { MOCK_CARS_DATA } from '../../../Constants/testData';
import {
  CLEAR_CAR_DETAILS,
  GET_CARS_FAILURE,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  GET_CAR_DETAILS_FAILURE,
  GET_CAR_DETAILS_LOADING,
  GET_CAR_DETAILS_SUCCESS,
} from '../constants';
import carsReducer, { defaultState } from '../reducer';

describe('carsReducer', () => {
  it('should return initial state', () => {
    expect(carsReducer(undefined, { type: null })).toEqual(defaultState);
  });

  it('should set loading when getCars loading is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_CARS_LOADING,
        payload: true,
      }).loading,
    ).toStrictEqual(true);
  });

  it('should set cars when getCars success is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_CARS_SUCCESS,
        payload: MOCK_CARS_DATA,
      }).data,
    ).toStrictEqual(MOCK_CARS_DATA.cars);
  });

  it('should set error when getCars failure is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_CARS_FAILURE,
      }).error,
    ).toStrictEqual(true);
  });

  it('should set loading when getCarDetails loading is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_CAR_DETAILS_LOADING,
        payload: true,
      }).carDetails.loading,
    ).toStrictEqual(true);
  });

  it('should set carDetails when getCarDEtails success is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_CAR_DETAILS_SUCCESS,
        payload: MOCK_CARS_DATA.cars[0],
      }).carDetails.data,
    ).toStrictEqual(MOCK_CARS_DATA.cars[0]);
  });

  it('should set carDetails when getCarDEtails success is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: GET_CAR_DETAILS_FAILURE,
      }).carDetails.error,
    ).toStrictEqual(true);
  });

  it('should clear carDetails when clearCarDEtails is fired', () => {
    expect(
      carsReducer(defaultState, {
        type: CLEAR_CAR_DETAILS,
      }).carDetails,
    ).toStrictEqual(defaultState.carDetails);
  });
});
