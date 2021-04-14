import React, { lazy } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import NotFound from 'src/pages/NotFound';
import Checkout from 'src/pages/Checkout';

// PAGES
const Home = lazy(() => import('../pages/Home'));

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/volcanic" />
      </Route>

      {/* <Route exact path="/:partner">
        <Home />
      </Route> */}
      <Route exact path="/volcanic">
        <Home />
      </Route>
      <Route exact path="/seavell">
        <Home />
      </Route>
      <Route exact path="/wingeon">
        <Home />
      </Route>

      <Route exact path="/:partner/checkout">
        <Checkout />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
