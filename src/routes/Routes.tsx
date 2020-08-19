import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Friends from './Friends';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/friends" exact component={Friends} />
    <Route path="/watch" exact component={Friends} />
    <Route path="/marketplace" exact component={Friends} />
    <Route path="/groups" exact component={Friends} />
  </Switch>
);

export default Routes;
