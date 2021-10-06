import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { ModalTypes } from 'reduxstore/modalSlice/modalActionTypes';
import { Event } from 'services/constants';
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
  const modalType = useTypedSelector((state) => state.modal.modalType);
  const userId = useTypedSelector((state) => state.currentUser.userId);

  useEffect(() => {
    socket.onKick();
    socket.onDeleteRoom();
    socket.onBlur(dispatch);
    socket.getIssues(dispatch);
  }, []);

  useEffect(() => {
    console.log('Set user id to:', userId);
    socket.removeListener(Event.ON_VOTE_START);
    socket.onVoteStart(dispatch, userId);
  }, [userId]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Container className={modalType === ModalTypes.WAIT_MODAL ? classes.blurWrapper : classes.wrapper}>
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
