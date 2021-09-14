import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ThemeProvider } from '@material-ui/core';
import { toggleModal } from 'reduxstore/modalSlice/modalActions';
import SprintHeader from 'components/SprintHeader';
import ModalWindow from './Modal';
import CustomButton from './CustomButton';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import DealerPanel from './DealerPanel';
import IssueCreation from './IssueCreation';

export const App: FC = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={baseTheme}>
      {/* <Header /> */}
      <Container className="wrapper">
        <IssueCreation />
        <CustomButton
          buttonCaption="Open modal"
          onClick={() => dispatch(toggleModal({ isOpen: true, modalType: 'connectToLobby' }))}
        />
      </Container>
      <Footer />
      <ModalWindow />
    </ThemeProvider>
  );
};
