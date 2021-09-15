import React from 'react';
import { Container, Typography } from '@material-ui/core';
import CustomButton from 'components/CustomButton';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { useKickPlayerStyles } from './KickPlayer.styles';

const KickPlayer: React.FC = () => {
  const classes = useStyles();
  const kickPlayerclasses = useKickPlayerStyles();
  const isDealer = true;

  const player = '4elik';
  const initiator = 'AgroTelka';
  const getDealerMessage = () => (
    <>
      Are you really want to remove player{' '}
      <Typography component="span" className={kickPlayerclasses.playerName}>
        {player}
      </Typography>{' '}
      from game session?
    </>
  );
  const getPlayerMessage = () => (
    <>
      <Typography component="span" className={kickPlayerclasses.playerName}>
        {initiator}
      </Typography>{' '}
      want to kick member{' '}
      <Typography component="span" className={kickPlayerclasses.playerName}>
        {player}
      </Typography>
      .
      <br /> Do you agree with it?
    </>
  );

  return (
    <>
      <Container>
        <Typography className={kickPlayerclasses.modalHeader} variant="h2">
          Kick player?
        </Typography>
      </Container>

      <Container>
        <Typography variant="body1" className={kickPlayerclasses.bodyMessage}>
          {isDealer ? getDealerMessage() : getPlayerMessage()}
        </Typography>
      </Container>

      <Container className={classes.buttonsBlock}>
        <CustomButton className={classes.btn} buttonCaption={buttonTextConstants.YES} />
        <CustomButton
          className={classes.btn}
          buttonCaption={buttonTextConstants.NO}
          variant="outlined"
          onClick={() => {}}
        />
      </Container>
    </>
  );
};

export { KickPlayer };
