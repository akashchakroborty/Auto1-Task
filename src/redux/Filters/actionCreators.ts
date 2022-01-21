import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { HttpMethods, RestClient, StatusCode } from '../../utillity/restClient';
import { getColorsUrl, getManufacturersUrl } from '../../utillity/url-utils/urlBuilder';
import { AppState } from '../store';
import { CarsRequest } from '../types/carsTypes';
import { FiltersActionTypes, SetFilters } from '../types/filtersActionTypes';
import { GET_COLORS, GET_MANUFACTURERS, SET_FILTERS } from './constants';

export const getColors = (): ThunkAction<Promise<void>, AppState, void, FiltersActionTypes> =>
  async (dispatch: ThunkDispatch<AppState, void, FiltersActionTypes>) => {
    const url = getColorsUrl();
    const response = await RestClient({
      url,
      method: HttpMethods.get,
    });
    if (response.status === StatusCode.success) {
      dispatch({
        type: GET_COLORS,
        payload: response.data,
      });
    }
  };

export const getManufacturers = (): ThunkAction<Promise<void>, AppState, void, FiltersActionTypes> =>
  async (dispatch: ThunkDispatch<AppState, void, FiltersActionTypes>) => {
    const url = getManufacturersUrl();
    const response = await RestClient({
      url,
      method: HttpMethods.get,
    });
    if (response.status === StatusCode.success) {
      dispatch({
        type: GET_MANUFACTURERS,
        payload: response.data,
      });
    }
  };

export const setFilters = (props: CarsRequest): SetFilters => {
  return {
    type: SET_FILTERS,
    payload: props,
  };
};
