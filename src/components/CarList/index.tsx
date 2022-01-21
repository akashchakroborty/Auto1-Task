import React, { useEffect } from 'react';
import { Typography, Alert } from '@mui/material';
import { Car, CarsRequest } from '../../redux/types/carsTypes';
import { CarListItemSkeleton, CarListItem } from '../CarListItem';

export interface CarListProps {
  getCars: (props: CarsRequest) => void;
  cars: Car[];
  error: boolean;
  totalCarsCount: number;
  loading: boolean;
}

const CarList: React.FC<CarListProps> = ({
 getCars, cars, error, totalCarsCount, loading
}) => {
  useEffect(() => {
    if (!cars.length) {
      getCars({ sort: 'asc', page: 1 });
    }
  }, [getCars]);

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
    </>
  );
};

export default CarList;
