import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter } from 'react-router-dom';
import { clearCarDetails, getCarDetails } from '../../redux/Cars/actionCreators';
import { selectCarDetails } from '../../redux/Cars/selector';
import { AppState } from '../../Redux/store';
import { CarsActionTypes } from '../../redux/types/carsActionTypes';
import CarDetails from '.';

const mapStateToProps = (state: AppState) => ({
  carDetails: selectCarDetails(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, CarsActionTypes>) => {
  return {
    getCarDetails: (stockNumber: number) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getCarDetails(stockNumber));
    },
    clearCarDetails: () => {
      dispatch(clearCarDetails());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarDetails));
