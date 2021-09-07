import { Container } from '@material-ui/core';
import React from 'react';

interface IModalBodyProps {
  content: string | React.FC;
}

const ModalBody: React.FC<IModalBodyProps> = ({ content }) => {
  return <Container>{content}</Container>;
};

export { ModalBody };
