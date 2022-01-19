import React from 'react';
import Theme from '../ThemeProvider';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

const App: React.FC = () => {
  return (
    <Theme>
      <CssBaseline />
      <Router>
        <Header />
      </Router>
    </Theme>
  );
};

export default App;
