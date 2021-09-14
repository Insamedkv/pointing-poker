import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';

export const Main: FC = () => {
  return (
    <Router>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Router>
  );
};
