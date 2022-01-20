import React from 'react';
import CarList from '../../components/CarList/CarList.container';
import { makeStyles, createStyles } from '@mui/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: 24,
    },
  }),
);

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CarList />
    </Container>
  );
};

export default Dashboard;
