import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { toggleModal } from 'reduxstore/modalReducer/modalActions';
import ModalWindow from './Modal';
import CustomButton from './CustomButton';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';

export const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="wrapper">
        {/* <Header /> */}
        <CustomButton
          buttonCaption="Open modal"
          onClick={() => dispatch(toggleModal({ isOpen: true, modalType: 'connectToLobby' }))}
        />
        <Footer />
      </div>
      <ModalWindow />
    </ThemeProvider>
  );
};
