import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from './Routes';
//import history from '../components/History';
export function PrivateNav() {
  return (
    <Switch>
      {ROUTES.PRIVATE.map((r) => (
        <Route key={r.NAME} path={r?.PATH} exact component={r.component} />
      ))}
      <Redirect exact to={ROUTES?.PRIVATE[0]?.PATH || '/'} />
    </Switch>
  );
}
