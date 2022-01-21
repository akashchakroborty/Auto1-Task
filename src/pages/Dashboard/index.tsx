import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Container, Grid } from '@mui/material';
import CarList from '../../components/CarList/CarList.container';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: 24,
    },
  }),);

const Dashboard: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <CarList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
