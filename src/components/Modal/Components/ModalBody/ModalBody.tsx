import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { LobbyContent } from './Components/LobbyContent';
import { KickPlayer } from './Components/KickPlayer';

interface IModalBodyProps {
  modalType?: 'connectToLobby' | 'kickPlayer';
}

interface IBodyVariants {
  [index: string]: React.FC;
}

const bodyVariants: IBodyVariants = {
  connectToLobby: LobbyContent,
  kickPlayer: KickPlayer,
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
