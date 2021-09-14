import React from 'react';
import { Container, Typography } from '@material-ui/core';
import CustomButton from 'components/CustomButton';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { useKickPlayerStyles } from './KickPlayer.styles';

const KickPlayer: React.FC = () => {
  const classes = useStyles();
  const kickPlayerclasses = useKickPlayerStyles();
  const isDealer = false;

  const player = '4elik';
  const initiator = 'AgroTelka';
  const dealerMessage = `Are you really want to remove player ${player} from game session?`;
  const playerMessage = `${initiator} want to kick member ${player}. Do you agree with it? `;

  return (
    <>
      <Container>
        <Typography className={kickPlayerclasses.modalHeader} variant="h2">
          Kick player?
        </Typography>
      </Container>

      <Typography>{isDealer ? dealerMessage : playerMessage}</Typography>

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
