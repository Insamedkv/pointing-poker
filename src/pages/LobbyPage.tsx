import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import DealerPanel from 'components/DealerPanel';
import GameSettings from 'components/GameSettings';
import IssueCreation from 'components/IssueCreation';
import MembersList from 'components/MembersList';
import SectionHeader from 'components/SectionHeader';
import SprintHeader from 'components/SprintHeader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { restoreSession } from 'utils/share';
import { useDispatch } from 'react-redux';
import { setUserCredentials } from 'reduxstore/userSlice';
import { SignupResp } from 'services/serviceTypes';
import Chat from 'components/Chat';
import { socket } from '../index';
import { useStyles } from './GamePage.styles';

interface ILobbyProps {
  roomId: string;
}

const LobbyPage: React.FC<ILobbyProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentSession = restoreSession();
  const { userId, isDealer, isObserver } = useTypedSelector((state) => state.currentUser);

  useEffect(() => {
    currentSession.then((data) => data && dispatch(setUserCredentials(data as SignupResp)));
  }, []);

  useEffect(() => {
    if (isObserver !== undefined && userId) socket.changeObserverStatus(userId, isObserver);
  }, [isObserver]);

  return (
    <Container style={{ paddingTop: 70, paddingBottom: 80 }}>
      <SprintHeader />
      <Chat />
      <DealerPanel />

      {!isDealer && (
        <Container>
          <Typography className={classes.infoBlock} align="center" variant="h3">
            Wait, please. The creator customizes the game...
          </Typography>
        </Container>
      )}

      <SectionHeader header="Members" />
      <MembersList />

      {isDealer && (
        <>
          <SectionHeader header="Issues" />
          <IssueCreation />

          <GameSettings />
        </>
      )}
    </Container>
  );
};

export { LobbyPage };
