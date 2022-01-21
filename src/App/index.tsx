import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main id="content">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
