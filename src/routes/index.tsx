import React, { lazy } from 'react';
import { Switch, Route, BrowserRouter /* Redirect */ } from 'react-router-dom';
import NotFound from 'src/pages/NotFound';
import Checkout from 'src/pages/Checkout';
// import { isAuthenticated } from 'src/services/AuthenticationService';

// PAGES
const Home = lazy(() => import('../pages/Home'));

// const PrivateRoute = ({ component: Component, child: Child, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         Child ? (
//           <Component {...props}>
//             <Child {...props} />
//           </Component>
//         ) : (
//           <Component {...props} />
//         )
//       ) : (
//         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//       )
//     }
//   />
// );

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact>
        <Redirect to="/" />
      </Route> */}
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/checkout">
        <Checkout />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
