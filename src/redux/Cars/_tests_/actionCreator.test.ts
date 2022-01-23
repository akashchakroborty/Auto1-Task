import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { MOCK_CARS_DATA } from '../../../Constants/testData';
import { RestClient } from '../../../utillity/restClient';
import { AppState } from '../../store';
import { AppActions } from '../../Types/appActionsTypes';
import { clearCarDetails, getCarDetails, getCars } from '../actionCreators';
import {
  CLEAR_CAR_DETAILS,
  GET_CARS_FAILURE,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  GET_CAR_DETAILS_FAILURE,
  GET_CAR_DETAILS_LOADING,
  GET_CAR_DETAILS_SUCCESS,
} from '../constants';

const middlewares = [thunk];
export const mockStore = createMockStore<AppState, ThunkDispatch<AppState, void, AppActions>>(
  middlewares,
);

jest.mock('../../../utillity/restClient');

describe('Cars Actions', () => {
  it('should create an action to clear car details', () => {
    const expectedAction = {
      type: CLEAR_CAR_DETAILS,
    };
    expect(clearCarDetails()).toEqual(expectedAction);
  });

  describe('Test getCars action creator', () => {
    it('creates GET_CARS_SUCCESS after successfully fetching cars with 200 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 200, data: MOCK_CARS_DATA });
      });

      const expectedActions = [
        {
          type: GET_CARS_LOADING,
          payload: true,
        },
        {
          type: GET_CARS_LOADING,
          payload: false,
        },
        { type: GET_CARS_SUCCESS, payload: MOCK_CARS_DATA },
      ];

      const store = mockStore();
      return store.dispatch(getCars({ page: 1, sort: 'asc' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates GET_CARS_FAILURE after failure in fetching cars with 404 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.reject({ status: 404 });
      });

      const expectedActions = [
        {
          type: GET_CARS_LOADING,
          payload: true,
        },
        { type: GET_CARS_FAILURE },
      ];

      const store = mockStore();
      return store.dispatch(getCars({ page: 1, sort: 'asc' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Test getCarDetails action creator', () => {
    it('creates GET_CAR_DETAILS_SUCCESS after successfully fetching car details with 200 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 200, data: { car: MOCK_CARS_DATA.cars[0] } });
      });

      const expectedActions = [
        {
          type: GET_CAR_DETAILS_LOADING,
          payload: true,
        },
        {
          type: GET_CAR_DETAILS_LOADING,
          payload: false,
        },
        { type: GET_CAR_DETAILS_SUCCESS, payload: MOCK_CARS_DATA.cars[0] },
      ];

      const store = mockStore();
      return store.dispatch(getCarDetails(97074)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates GET_CAR_DETAILS_FAILURE after failure in fetching car details with 404 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.reject({ status: 404 });
      });

      const expectedActions = [
        {
          type: GET_CAR_DETAILS_LOADING,
          payload: true,
        },
        { type: GET_CAR_DETAILS_FAILURE },
      ];

      const store = mockStore();
      return store.dispatch(getCarDetails(97074)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
