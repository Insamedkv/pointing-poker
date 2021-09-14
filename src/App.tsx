import React, { FC, ReactElement } from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { baseTheme } from './utils/customTheme';
import { Main } from './pages/Main';
import { useStyles } from './App.styles';

export const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={baseTheme}>
      <Container className={classes.wrapper}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
