import React from 'react';
import {
  Typography,
  Button,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Alert,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CarDetails } from '../../redux/types/carsTypes';

export interface CarDetialsProps {
  getCarDetails: (stockNumber: number) => void;
  clearCarDetails: () => void;
  carDetails: CarDetails;
  match: {
    params: { id: string };
  };
}

const useStyles = makeStyles({
  container: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 350,
    backgroundColor: '#EDEDED',
    backgroundPosition: 'center center',
  },
  favoriteContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    height: 'min-content',
  },
  favoriteButton: {
    alignSelf: 'flex-end',
  },
  loading: {
    margin: 'auto',
  },
});

export const CarDetail: React.FC<CarDetialsProps> = ({
  match: {
    params: { id },
  },
  carDetails,
  getCarDetails,
  clearCarDetails,
}) => {
  const { loading, error, data } = carDetails;
  const classes = useStyles();
  const [favorites, setFavorites] = React.useState(
    () => JSON.parse(localStorage.getItem('favorites') || '[]') as number[],
  );
  React.useEffect(() => {
    getCarDetails(+id);
    return () => {
      clearCarDetails();
    };
  }, []);

  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteButtonClick = () => {
    if (favorites.includes(data?.stockNumber as number)) {
      setFavorites((car) => car.filter((f) => f !== data?.stockNumber));
    } else {
      setFavorites((car) => [...car, data?.stockNumber as number]);
    }
  };
  return (
    <div>
      <div className={classes.image}>
        {data && <CardMedia className={classes.image} image={data?.pictureUrl} />}
      </div>
      <Container className={classes.container} maxWidth="md">
        {loading && (
          <CircularProgress className={classes.loading} />
        )}
        {error && <Alert severity="error">An error has occured.</Alert>}
        {!error && data && (
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={8}>
              <Typography fontWeight={700} variant="h4" component="h1">
                {data?.manufacturerName}
                {' '}
                {data?.modelName}
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                style={{ textTransform: 'capitalize', margin: '24px 0' }}
              >
                Stock #
                {' '}
                {data?.stockNumber}
                {' '}
                -
                {' '}
                {data?.mileage.number.toLocaleString()}
                {' '}
                {data?.mileage.unit.toUpperCase()}
                {' '}
                -
                {' '}
                {data?.fuelType}
                {' '}
                -
                {data?.color}
              </Typography>
              <Typography>
                This car is currently available and can be delivered as soon as tomorrow morning.
                Please be aware that delivery times shown in this page are not definitive and may
                change due to bad weather conditions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper variant="outlined" square className={classes.favoriteContainer}>
                <Typography align="left" gutterBottom>
                  If you like this car, click the button and save it in your collection of favorite
                  items.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  id="favoriteButton"
                  fullWidth={false}
                  size="medium"
                  className={classes.favoriteButton}
                  onClick={handleFavoriteButtonClick}
                >
                  {favorites.includes(data?.stockNumber) ? 'Remove' : 'Save'}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default CarDetail;
