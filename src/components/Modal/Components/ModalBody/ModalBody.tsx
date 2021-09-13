import React from 'react';
import { Container } from '@material-ui/core';
import { LobbyContent } from './Components/LobbyContent';

interface IModalBodyProps {
  modalType?: string;
}

interface IBodyVariants {
  [index: string]: React.FC;
}

const bodyVariants: IBodyVariants = {
  connectToLobby: LobbyContent,
};

const ModalBody: React.FC<IModalBodyProps> = ({ modalType }) => {
  if (modalType && Object.keys(bodyVariants).includes(modalType)) {
    const Body: React.FC = bodyVariants[modalType];
    return (
      <Container>
        <Body />
      </Container>
    );
  }

  return <Container> </Container>;
};

export { ModalBody };
