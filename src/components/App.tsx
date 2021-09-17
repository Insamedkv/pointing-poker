import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ThemeProvider } from '@material-ui/core';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import { CardForAdd } from './AddCardValues/Component';
import ModalWindow from './Modal';

export const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <Container className="wrapper">
        <CardForAdd />
      </Container>
      <Footer />
      <ModalWindow />
    </ThemeProvider>
  );
};
