import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Header } from './Header/index';
import { Main } from './Main/index';
import { Footer } from './Footer/index';
import { theme } from './App.styles';

export const App: FC = (): ReactElement => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
