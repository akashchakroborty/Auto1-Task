import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { MOCK_COLORS, MOCK_MANUFACTURERS } from '../../../Constants/testData';
import { RestClient } from '../../../utillity/restClient';
import { AppState } from '../../store';
import { AppActions } from '../../Types/appActionsTypes';
import { getColors, getManufacturers, setFilters } from '../actionCreators';
import { GET_COLORS, GET_MANUFACTURERS, SET_FILTERS } from '../constants';

const middlewares = [thunk];
export const mockStore = createMockStore<AppState, ThunkDispatch<AppState, void, AppActions>>(
  middlewares,
);

jest.mock('../../../utillity/restClient');

describe('Filter Actions', () => {
  it('should create an action to set filters', () => {
    const expectedAction = {
      type: SET_FILTERS,
      payload: { page: 1 },
    };
    expect(setFilters({ page: 1 })).toEqual(expectedAction);
  });

  describe('Test getColors action creator', () => {
    it('creates GET_COLORS after successfully fetching colors with 200 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 200, data: MOCK_COLORS });
      });

      const expectedActions = [{ type: GET_COLORS, payload: MOCK_COLORS.colors }];

      const store = mockStore();
      return store.dispatch(getColors()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Test getCarDetails action creator', () => {
    it('creates GET_CAR_DETAILS_SUCCESS after successfully fetching car details with 200 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 200, data: MOCK_MANUFACTURERS });
      });

      const expectedActions = [
        { type: GET_MANUFACTURERS, payload: MOCK_MANUFACTURERS.manufacturers },
      ];

      const store = mockStore();
      return store.dispatch(getManufacturers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
