import React from 'react';
import Theme from '../ThemeProvider';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <Theme>
      <CssBaseline />
      <Router>
        <Header />
        <Footer />
      </Router>
    </Theme>
  );
};

export default App;
