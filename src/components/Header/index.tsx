import React from 'react';
import Logo from '../../assets/logo.png';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, AppBar, Toolbar, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    logo: {
      margin: '10px 0',
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
      <Toolbar>
        <NavLink to="/" style={{ flexGrow: 1 }}>
          <img src={Logo} alt="Auto1 Logo" className={classes.logo} />
        </NavLink>
        <nav>
          <Link variant="button" color="textPrimary" component={NavLink} to="/purchase">
            Purchase
          </Link>
          <Link variant="button" color="textPrimary" component={NavLink} to="/orders">
            My Orders
          </Link>
          <Link variant="button" color="textPrimary" component={NavLink} to="/sell">
            Sell
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
