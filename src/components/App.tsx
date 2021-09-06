import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Header } from './Header/index';
import { Main } from './Main/index';
import { Footer } from './Footer/index';
import ModalWindow from './Modal';
import { baseTheme } from '../utils/customTheme';

export const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="wrapper">
        <ModalWindow />
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
