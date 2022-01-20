import { combineReducers } from 'redux';
import carsReducer from './Cars/reducer';

export default combineReducers({
  cars: carsReducer,
});
