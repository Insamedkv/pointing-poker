import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import { Timer } from './Timer/Timer';

export const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="wrapper">
        <Header />
        <Timer />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
