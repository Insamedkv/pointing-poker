import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ThemeProvider } from '@material-ui/core';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import IssueCard from './IssueCard';
import ModalWindow from './Modal';
import CustomButton from './CustomButton';
import { toggleModal } from '../redux/modalReducer/modalActions';
import { LobbyContent } from './Modal/Components/ModalBody/Components/LobbyContent';

export const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={baseTheme}>
      <Container>
        {/* <Header /> */}
        <IssueCard
          mode="show"
          issue={{
            issueID: 'fsdfs-sdfsdf-sdf-sdf',
            issueLink: 'http://github.com/',
            issueName: 'issue 333',
            issuePriority: 'medium',
            inProgress: true,
          }}
        />
        <IssueCard
          mode="show"
          issue={{
            issueID: 'asdfs-sd42df-shff-sdsf',
            issueLink: 'http://github.com/',
            issueName: 'PAGE 394!',
            issuePriority: 'hight',
            inProgress: false,
          }}
        />
        <IssueCard mode="create" />

        <CustomButton
          buttonCaption={'Open lobby modal'}
          color={'primary'}
          variant={'outlined'}
          onClick={() => dispatch(toggleModal(true, 'Connect to lobby', LobbyContent))}
        />

        <ModalWindow />
        {/* <Footer /> */}
      </Container>
    </ThemeProvider>
  );
};
