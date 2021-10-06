import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import CustomButton from 'components/CustomButton';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IUserInfo } from 'defaultTypes';
import { deleteUserById } from 'services/httpUser';
import { UserResp } from 'services/serviceTypes';
import { useStyles } from './WaitInfo.styles';
import { useKickPlayerStyles } from '../KickPlayer/KickPlayer.styles';

const WaitInfo: React.FC = () => {
  const classes = useStyles();
  const classesForText = useKickPlayerStyles();
  const dispatch = useDispatch();
  const userName = useTypedSelector((state) => state.modal.player as IUserInfo);

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
