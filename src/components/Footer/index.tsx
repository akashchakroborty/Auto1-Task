import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Typography } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: 64,
      padding: 16,
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),);

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; AUTO1 Group 2022
      </Typography>
    </footer>
  );
};

export default Footer;
