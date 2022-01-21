import { combineReducers } from 'redux';
import carsReducer from './Cars/reducer';
import filtersReducer from './Filters/reducer';

export default combineReducers({
  cars: carsReducer,
  filters: filtersReducer,
});
