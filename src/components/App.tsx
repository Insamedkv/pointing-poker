import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ThemeProvider } from '@material-ui/core';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import ModalWindow from './Modal';
import { AddCardValues } from './AddCardValues';

export const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <Container className="wrapper">
        <AddCardValues />
      </Container>
      <Footer />
      <ModalWindow />
    </ThemeProvider>
  );
};
