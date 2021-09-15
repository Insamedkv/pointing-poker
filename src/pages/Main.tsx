import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';

export const Main: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};
