import React from 'react';
import {
  Router, Route, Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ROUTE_PATH from '../utilities/RoutePath';
import Login from '../components/container/Login';
import NotFound from '../components/container/NotFound';
import Signup from '../components/container/Signup';
import Homepage from '../components/container/Home';
import NavBar from '../components/view/navBar';

const history = createHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route path={ROUTE_PATH.homepage} component={Homepage} exact />
          <Route path={ROUTE_PATH.user.login} component={Login} />
          <Route path={ROUTE_PATH.user.signup} component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
};

export default Routes;
