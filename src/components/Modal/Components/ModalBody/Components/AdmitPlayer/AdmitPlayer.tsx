import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import CustomButton from 'components/CustomButton';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IUserInfo } from 'defaultTypes';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { deleteUserById } from 'services/httpUser';
import { UserResp } from 'services/serviceTypes';
import { useKickPlayerStyles } from '../KickPlayer/KickPlayer.styles';
import { socket } from '../../../../../../index';

const AdmitPlayer: React.FC = () => {
  const classes = useStyles();
  const classesForText = useKickPlayerStyles();
  const dispatch = useDispatch();
  const userName = useTypedSelector((state) => state.modal.player as IUserInfo);

  const admitPlayer = () => {
    if (userName?._id) socket.unblur(userName._id);
    dispatch(closeModal());
  };
  const rejectPlayer = () => {
    if (userName) deleteUserById((userName as UserResp)._id);
    dispatch(closeModal());
  };

  return (
    <>
      <Container>
        <Typography variant="h2" className={classes.modalHeader}>
          Admit player?
        </Typography>
      </Container>

      <Container>
        <Typography variant="body1" align="center">
          A you really want to invite{' '}
          <Typography component="span" className={classesForText.playerName}>
            {userName?.firstName}
          </Typography>{' '}
          in our game!
        </Typography>
      </Container>

      <Container className={classes.buttonsBlock}>
        <CustomButton buttonCaption={buttonTextConstants.YES} onClick={admitPlayer} />
        <CustomButton
          buttonCaption={buttonTextConstants.NO}
          variant="outlined"
          onClick={() => {
            dispatch(closeModal());
            rejectPlayer();
          }}
        />
      </Container>
    </>
  );
};

export default AdmitPlayer;
