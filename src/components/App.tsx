import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ThemeProvider } from '@material-ui/core';
import SprintHeader from 'components/SprintHeader';
import { kickOutPlayer } from 'reduxstore/modalSlice/modalActions';
import { connectToLobby } from 'reduxstore/modalSlice/modalSlice';
import ModalWindow from './Modal';
import CustomButton from './CustomButton';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import DealerPanel from './DealerPanel';
import PersonPanel from './PersonPanel';
import IssueCreation from './IssueCreation';
import MembersList from './MembersList';
import SectionHeader from './SectionHeader';

export const App: FC = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <Container className="wrapper">
        <IssueCreation />
        <CustomButton buttonCaption="Open modal" onClick={() => dispatch(connectToLobby())} />
        <SprintHeader
          sprintId={'44'}
          issuesList={[
            { issueID: '1', issueLink: 'fdssd', issueName: 'ussue 443', issuePriority: 'low', issueStatus: 'opened' },
            {
              issueID: '2',
              issueLink: 'fasdfasdf',
              issueName: 'ussue 556',
              issuePriority: 'medium',
              issueStatus: 'opened',
            },
            {
              issueID: '3',
              issueLink: 'fdasdfasdfssd',
              issueName: 'ussue 12',
              issuePriority: 'low',
              issueStatus: 'opened',
            },
            {
              issueID: '4',
              issueLink: 'asdfasdf',
              issueName: 'ussue 64',
              issuePriority: 'high',
              issueStatus: 'opened',
            },
          ]}
        />
        <DealerPanel />
        <CustomButton
          buttonCaption="Open lobby modal"
          onClick={() => dispatch(connectToLobby('https://connectToLobby.com/root/sdfdsfds'))}
        />
        <CustomButton buttonCaption="Open kick modal" onClick={() => dispatch(kickOutPlayer('4eliks'))} />
        <SectionHeader header="Members" />
        <MembersList />
      </Container>
      <Footer />
      <ModalWindow />
    </ThemeProvider>
  );
};
