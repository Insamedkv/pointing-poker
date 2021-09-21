import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
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
import { SignupResp, UserResp } from 'services/serviceTypes';

interface ILobbyProps {
  roomId: string;
}

const LobbyPage: React.FC<ILobbyProps> = () => {
  const dispatch = useDispatch();
  const currentSession = restoreSession();
  const { isDealer } = useTypedSelector((state) => state.currentUser);

  useEffect(() => {
    currentSession.then((data) => data && dispatch(setUserCredentials(data as SignupResp)));
  }, []);

  return (
    <Container style={{ paddingTop: 70, paddingBottom: 80 }}>
      <SprintHeader />
      <DealerPanel />

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

export default LobbyPage;
