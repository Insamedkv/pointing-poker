import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ThemeProvider } from '@material-ui/core';
import { toggleModal } from 'reduxstore/modalReducer/modalActions';
import SprintHeader from 'components/SprintHeader';
import ModalWindow from './Modal';
import CustomButton from './CustomButton';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import DealerPanel from './DealerPanel';

export const App: FC = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={baseTheme}>
      {/* <Header /> */}
      <Container className="wrapper">
        <SprintHeader
          sprintId={'44'}
          issuesList={[
            { issueID: '1', issueLink: 'fdssd', issueName: 'ussue 443', issuePriority: 'low' },
            { issueID: '2', issueLink: 'fasdfasdf', issueName: 'ussue 556', issuePriority: 'medium' },
            { issueID: '3', issueLink: 'fdasdfasdfssd', issueName: 'ussue 12', issuePriority: 'low' },
            { issueID: '4', issueLink: 'asdfasdf', issueName: 'ussue 64', issuePriority: 'hight' },
          ]}
        />
        <DealerPanel />
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
