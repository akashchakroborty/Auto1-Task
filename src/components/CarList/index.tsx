import React, { useEffect } from 'react';
import { Typography, Alert } from '@mui/material';
import { Car, CarsRequest } from '../../redux/types/carsTypes';

export interface CarListProps {
  getCars: (props: CarsRequest) => void;
  cars: Car[];
  error: boolean;
  totalCarsCount: number;
}

const CarList: React.FC<CarListProps> = ({
 getCars, cars, error, totalCarsCount
}) => {
  useEffect(() => {
    if(!cars.length) {
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
    </>
  );
};

export default CarList;
