import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getCars } from '../../redux/Cars/actionCreators';
import { AppState } from '../../Redux/store';
import { CarsActionTypes } from '../../redux/types/carsActionTypes';
import { CarsRequest } from '../../redux/types/carsTypes';
import Filters from '.';
import {
  selectActiveFilters,
  selectColors,
  selectManufacturers,
} from '../../redux/Filters/selector';
import { getColors, getManufacturers, setFilters } from '../../redux/Filters/actionCreators';
import { FiltersActionTypes } from '../../redux/types/filtersActionTypes';

const mapStateToProps = (state: AppState) => ({
  colors: selectColors(state),
  manufacturers: selectManufacturers(state),
  activeFilters: selectActiveFilters(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, CarsActionTypes | FiltersActionTypes>,
) => {
  return {
    getCars: (props: CarsRequest) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getCars(props));
    },
    getColors: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getColors());
    },
    getManufacturers: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getManufacturers());
    },
    setFilters: (props: CarsRequest) => {
      dispatch(setFilters(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
