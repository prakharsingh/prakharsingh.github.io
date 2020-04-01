import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../pages/home/home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
