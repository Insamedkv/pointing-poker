import { Container } from '@material-ui/core';
import React from 'react';

interface IModalBodyProps {
  Content?: React.FC;
}

const ModalBody: React.FC<IModalBodyProps> = ({ Content }) => {
  if (Content)
    return (
      <Container>
        <Content />
      </Container>
    );
  return <Container> </Container>;
};

export { ModalBody };
