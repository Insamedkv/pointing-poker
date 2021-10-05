import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import MainPage from './pages/MainPage';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { baseTheme } from './utils/customTheme';
import { useStyles } from './App.styles';
import ModalWindow from './components/Modal/index';
import { GamePage, LobbyPage, ResultsPage } from './pages';
import { socket } from './index';

const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    path: '/lobby/:roomId/',
    component: LobbyPage,
  },
  {
    path: '/game/:roomId/',
    component: GamePage,
  },
  {
    path: '/results',
    component: ResultsPage,
    exact: true,
  },
];

export const App: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.onKick();
    socket.onDeleteRoom();
    socket.getIssues(dispatch);
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <Container className={classes.wrapper}>
        <Header />
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact={route.exact} component={route.component} path={route.path} />
            ))}
            <Redirect to="/404" />
          </Switch>
          <ModalWindow />
        </Router>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
