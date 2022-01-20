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
import { AppState } from '../../Redux/store';
import { CarsActionTypes } from '../../redux/types/carsActionTypes';
import { CarsRequest } from '../../redux/types/carsTypes';
import CarList from '.';

const mapStateToProps = (state: AppState) => ({
  cars: selectCars(state),
  loading: selectIsCarsLoading(state),
  error: selectIsError(state),
  totalCarsCount: selectTotalCarsCount(state),
  totalPageCount: selectTotalPageCount(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, CarsActionTypes>) => {
  return {
    getCars: (props: CarsRequest) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getCars(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
