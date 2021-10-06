import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './WaitInfo.styles';

const WaitInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.modalContainer}>
        <Typography className={classes.bodyMessage} variant="body1" align="center">
          Please wait for admission/rejection to the room.
        </Typography>
      </Container>
    </>
  );
};

export default WaitInfo;
