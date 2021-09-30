import React, { FC, ReactElement } from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { AddCardValues } from 'components/AddCardValues';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { baseTheme } from './utils/customTheme';
import { Main } from './pages/Main';
import { useStyles } from './App.styles';
import ModalWindow from './components/Modal/index';

export const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={baseTheme}>
      <Container className={classes.wrapper}>
        <Header />
        {/* <Main /> */}
        <AddCardValues />
        <Footer />
        <ModalWindow />
      </Container>
    </ThemeProvider>
  );
};
