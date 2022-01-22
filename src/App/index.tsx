import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Error404 = lazy(() => import('../pages/Error404'));
const CarDetail = lazy(() => import('../pages/CarDetails/CarDetails.container'));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main id="content">
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/details/:id" component={CarDetail} />
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
