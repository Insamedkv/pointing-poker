import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { ModalTypes } from 'reduxstore/modalSlice/modalActionTypes';
import { LobbyContent } from './Components/LobbyContent';
import { KickPlayer } from './Components/KickPlayer';
import CreateIssue from './Components/CreateIssue';
import AdmitPlayer from './Components/AdmitPlayer';

interface IModalBodyProps {
  modalType?: ModalTypes.CONNECT_TO_LOBBY | ModalTypes.CREATE_ISSUE | ModalTypes.KICK_PLAYER | ModalTypes.ADMIT_PLAYER;
}

interface IBodyVariants {
  [index: string]: React.FC;
}

const bodyVariants: IBodyVariants = {
  connectToLobby: LobbyContent,
  kickPlayer: KickPlayer,
  createIssue: CreateIssue,
  admitPlayer: AdmitPlayer,
};

const ModalBody: React.FC<IModalBodyProps> = ({ modalType }) => {
  const classes = useStyles();
  if (modalType && Object.keys(bodyVariants).includes(modalType)) {
    const Body: React.FC = bodyVariants[modalType];
    return (
      <Container className={classes.modalBodyContainer}>
        <Body />
      </Container>
    );
  }

  return <Container> </Container>;
};

export { ModalBody };
