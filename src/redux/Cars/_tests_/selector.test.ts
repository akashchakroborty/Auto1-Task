import { defaultState as carsState } from '../reducer';
import { defaultState as FiltersState } from '../../Filters/reducer';
import {
  selectCarDetails,
  selectCars,
  selectIsCarsLoading,
  selectIsError,
  selectTotalCarsCount,
  selectTotalPageCount,
} from '../selector';
import { AppState } from '../../store';

export const mockState: AppState = {
  cars: carsState,
  filters: FiltersState,
};
describe('Cars Selector', () => {
  it('Test cars selectors', () => {
    expect(selectCars(mockState)).toEqual(mockState.cars.data);

    expect(selectIsCarsLoading(mockState)).toEqual(mockState.cars.loading);

    expect(selectIsError(mockState)).toEqual(mockState.cars.error);

    expect(selectTotalCarsCount(mockState)).toEqual(mockState.cars.totalCarsCount);

    expect(selectTotalPageCount(mockState)).toEqual(mockState.cars.totalPageCount);

    expect(selectCarDetails(mockState)).toEqual(mockState.cars.carDetails);
  });
});
