import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Paper } from '@mui/material';
import CarList from '../../components/CarList/CarList.container';
import Filters from '../../components/Filters/Filters.container';

const useStyles = makeStyles({
  container: {
    marginTop: 24,
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Paper variant="outlined" square>
            <Filters />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <CarList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
