import { Container } from '@material-ui/core';
import DealerPanel from 'components/DealerPanel';
import GameSettings from 'components/GameSettings';
import IssueCreation from 'components/IssueCreation';
import MembersList from 'components/MembersList';
import SectionHeader from 'components/SectionHeader';
import SprintHeader from 'components/SprintHeader';
import React from 'react';

interface ILobbyProps {
  roomId: string;
}

const LobbyPage: React.FC<ILobbyProps> = ({ roomId }) => {
  return (
    <Container style={{ paddingTop: 70, paddingBottom: 80 }}>
      <SprintHeader sprintId={roomId} issuesList={[]} />
      <DealerPanel />

      <SectionHeader header="Members" />
      <MembersList />

      <SectionHeader header="Issues" />
      <IssueCreation />

      <GameSettings />
    </Container>
  );
};

export default LobbyPage;
