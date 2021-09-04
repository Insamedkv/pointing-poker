import React from 'react';
import { Typography } from '@material-ui/core';

interface IModalBodyProps {
  text: string;
}

const ModalBody: React.FC<IModalBodyProps> = ({ text }) => {
  return (
    <>
      <Typography align="center" paragraph={true}>
        {text}
      </Typography>
    </>
  );
};

export { ModalBody };
