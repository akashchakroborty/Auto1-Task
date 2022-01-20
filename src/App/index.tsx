import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
