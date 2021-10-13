import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer } from 'components';
import ROUTES from './Routes';

export function PublicNav() {
  return (
    <AppContainer>
      <Switch>
        {ROUTES.PUBLIC.map((r) => (
          <Route key={r.NAME} path={r.PATH} exact component={r.component} />
        ))}
        <Redirect exact to={ROUTES?.PUBLIC[0]?.PATH || '/'} />
      </Switch>
    </AppContainer>
  );
}
