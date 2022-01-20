import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { HttpMethods, RestClient, StatusCode } from '../../utillity/restClient';
import { getCarsUrl } from '../../utillity/url-utils/urlBuilder';
import { AppState } from '../store';
import { CarsActionTypes } from '../types/carsActionTypes';
import { CarsRequest } from '../types/carsTypes';
import { GET_CARS_LOADING, GET_CARS_SUCCESS, GET_CARS_FAILURE } from './constants';

export const getCars =
  (props: CarsRequest): ThunkAction<Promise<void>, AppState, void, CarsActionTypes> =>
  async (dispatch: ThunkDispatch<AppState, void, CarsActionTypes>) => {
    try {
      dispatch({
        type: GET_CARS_LOADING,
        payload: true,
      });
      const url = getCarsUrl(props);
      const response = await RestClient({
        url,
        method: HttpMethods.get,
      });
      dispatch({
        type: GET_CARS_LOADING,
        payload: false,
      });
      if (response.status === StatusCode.success) {
        dispatch({
          type: GET_CARS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_CARS_FAILURE,
      });
    }
  };
