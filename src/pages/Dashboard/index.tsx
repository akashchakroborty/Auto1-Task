import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Container } from '@mui/material';
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
      <CarList />
    </Container>
  );
};

export default Dashboard;
