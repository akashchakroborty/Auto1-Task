import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ThemeProvider';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
