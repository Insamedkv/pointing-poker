import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../../ModalWindow.styles';

interface IModalHeaderProps {
  text: string;
}

const ModalHeader: React.FC<IModalHeaderProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" align="center" className={classes.modalHeader}>
        {text}
      </Typography>
    </>
  );
};

export { ModalHeader };
