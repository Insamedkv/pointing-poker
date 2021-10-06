import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import CustomButton from 'components/CustomButton';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { deleteUserById } from 'services/httpUser';
import { useKickPlayerStyles } from './KickPlayer.styles';

const KickPlayer: React.FC = () => {
  const classes = useStyles();
  const kickPlayerclasses = useKickPlayerStyles();
  const dispatch = useDispatch();
  const { player, initiator } = useTypedSelector((state) => state.modal);
  const { isDealer } = useTypedSelector((state) => state.currentUser);

  const kickPlayer = () => {
    if (player) deleteUserById(player._id);
    dispatch(closeModal());
  };

  const getDealerMessage = () => (
    <>
      Are you really want to remove player{' '}
      <Typography component="span" className={kickPlayerclasses.playerName}>
        {player && player.firstName}
      </Typography>{' '}
      from game session?
    </>
  );
  const getPlayerMessage = () => (
    <>
      <Typography component="span" className={kickPlayerclasses.playerName}>
        {initiator && initiator.firstName}
      </Typography>{' '}
      want to kick member{' '}
      <Typography component="span" className={kickPlayerclasses.playerName}>
        {player && player.firstName}
      </Typography>
      .
      <br /> Do you agree with it?
    </>
  );

  return (
    <>
      <Container>
        <Typography className={classes.modalHeader} variant="h2">
          Kick player?
        </Typography>
      </Container>

      <Container>
        <Typography variant="body1" className={kickPlayerclasses.bodyMessage}>
          {isDealer ? getDealerMessage() : getPlayerMessage()}
        </Typography>
      </Container>

      <Container className={classes.buttonsBlock}>
        <CustomButton className={classes.btn} buttonCaption={buttonTextConstants.YES} onClick={kickPlayer} />
        <CustomButton
          className={classes.btn}
          buttonCaption={buttonTextConstants.NO}
          variant="outlined"
          onClick={() => dispatch(closeModal())}
        />
      </Container>
    </>
  );
};

export { KickPlayer };
