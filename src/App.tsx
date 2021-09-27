import React, { FC, ReactElement, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import MainPage from './pages/MainPage';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { baseTheme } from './utils/customTheme';
import { useStyles } from './App.styles';
import ModalWindow from './components/Modal/index';
import LobbyPage from './pages/LobbyPage';
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
];

export const App: FC = (): ReactElement => {
  const classes = useStyles();

  // socket.init();
  // socket.onKick();

  useEffect(() => {
    console.log('INIT IN APP');
    socket.init();
    socket.onKick();
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
