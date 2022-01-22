import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getCars } from '../../redux/Cars/actionCreators';
import {
  selectCars,
  selectIsCarsLoading,
  selectIsError,
  selectTotalCarsCount,
  selectTotalPageCount,
} from '../../redux/Cars/selector';
import { AppState } from '../../redux/store';
import { CarsActionTypes } from '../../redux/types/carsActionTypes';
import { CarsRequest } from '../../redux/types/carsTypes';
import CarList from '.';
import { selectActiveFilters } from '../../redux/Filters/selector';
import { setFilters } from '../../redux/Filters/actionCreators';
import { SetFilters } from '../../redux/types/filtersActionTypes';

const mapStateToProps = (state: AppState) => ({
  cars: selectCars(state),
  loading: selectIsCarsLoading(state),
  error: selectIsError(state),
  totalCarsCount: selectTotalCarsCount(state),
  totalPageCount: selectTotalPageCount(state),
  activeFilters: selectActiveFilters(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, CarsActionTypes | SetFilters>,
) => {
  return {
    getCars: (props: CarsRequest) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getCars(props));
    },
    setFilters: (props: CarsRequest) => {
      dispatch(setFilters(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
