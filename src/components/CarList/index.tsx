import React, { useEffect } from 'react';
import { Typography, Alert, Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Car, CarsRequest } from '../../redux/types/carsTypes';
import { CarListItemSkeleton, CarListItem } from '../CarListItem';

export interface CarListProps {
  getCars: (props: CarsRequest) => void;
  setFilters: (props: CarsRequest) => void;
  cars: Car[];
  error: boolean;
  totalCarsCount: number;
  loading: boolean;
  totalPageCount: number;
  activeFilters: CarsRequest;
}

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const CarList: React.FC<CarListProps> = ({
  getCars,
  setFilters,
  cars,
  error,
  totalCarsCount,
  loading,
  totalPageCount,
  activeFilters,
}) => {
  const classes = useStyles();
  const { page } = activeFilters;

  useEffect(() => {
    if (!cars.length) {
      getCars({ ...activeFilters, page: 1 });
    }
  }, [getCars]);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (page !== value) {
      setFilters({ page: value });
      getCars({ ...activeFilters, page: value });
    }
  };

  return (
    <>
      <Typography fontWeight={700} variant="h6" component="h1">
        Available cars
      </Typography>
      <Typography variant="h6" component="h1">
        {`Showing ${cars.length} of ${totalCarsCount} results`}
      </Typography>
      {error && <Alert severity="error">An error has occured.</Alert>}
      {loading
        ? Array.from(Array(10).keys()).map((item) => <CarListItemSkeleton key={item} />)
        : cars.map((carItem) => (
          <CarListItem key={`${carItem.stockNumber}-${carItem.modelName}`} carItem={carItem} />
          ))}
      <Pagination
        className={classes.pagination}
        count={totalPageCount}
        page={page}
        showFirstButton
        showLastButton
        onChange={handlePaginationChange}
      />
    </>
  );
};

export default CarList;
