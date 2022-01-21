import React from 'react';
import { makeStyles } from '@mui/styles';
import {
 Card, CardContent, CardMedia, Link, Typography, Skeleton
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import { Car } from '../../redux/types/carsTypes';

export interface CarListItemProps {
  carItem: Car;
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    alignItems: 'center',
    margin: '12px 0',
    padding: 12,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '0 24px 0 !important',
  }
});

export const CarListItemSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised={false} variant="outlined" square elevation={0}>
      <Skeleton variant="rectangular" width={100} height={75} />
      <CardContent className={classes.content}>
        <Skeleton width={300} height={40} />
        <Skeleton />
        <Skeleton width={100} />
      </CardContent>
    </Card>
  );
};

export const CarListItem: React.FC<CarListItemProps> = ({ carItem }) => {
  const classes = useStyles();
  const {
    manufacturerName,
    modelName,
    stockNumber,
    mileage: { unit, number },
    fuelType,
    color,
    pictureUrl,
  } = carItem;
  return (
    <Card className={classes.card} raised={false} variant="outlined" square elevation={0}>
      <CardMedia
        width={100}
        height={75}
        image={pictureUrl}
        alt="Car Thumbnail"
        title="Car Thumbnail"
        component="img"
      />
      <CardContent className={classes.content}>
        <Typography fontWeight={700} variant="h6">
          {manufacturerName}
          {' '}
          {modelName}
        </Typography>
        <Typography variant="subtitle2" style={{ textTransform: 'capitalize' }}>
          Stock #
          {stockNumber}
          {' '}
          -
          {' '}
          {number.toLocaleString()}
          {' '}
          {unit.toUpperCase()}
          {' '}
          -
          {' '}
          {fuelType}
          {' '}
          -
          {' '}
          {color}
        </Typography>
        <Link color="primary" component={RouterLink} to={`/details/${stockNumber}`}>
          <Typography variant="subtitle2">View Details</Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default CarListItem;
