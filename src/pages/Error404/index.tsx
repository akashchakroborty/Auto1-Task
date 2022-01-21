import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const useStyles = makeStyles({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 'min-content',
    marginBottom: 24,
  }
});

const Error404: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="sm">
      <img src={Logo} alt="Auto1 Logo" className={classes.image} />
      <Typography variant="h3" fontWeight={700} gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="subtitle1" component="h5" gutterBottom>
        Sorry, the page you are looking for does not exists.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You can always go back to the
        {' '}
        <Link color="primary" component={RouterLink} to="/">
          homepage
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default Error404;
