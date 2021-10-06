import React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BlockIcon from '@material-ui/icons/Block';
import { useDispatch } from 'react-redux';
import { getUserById } from 'services/httpUser';
import { kickOutPlayerModal } from 'reduxstore/modalSlice/modalActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './PersonPanel.styles';
import Avatara from '../Avatara';
import { IAvataraInfo, IUserInfo } from '../../defaultTypes';
import { socket } from '../../index';

interface IPersonPanelProps {
  userInfo: IUserInfo;
  avaSize: 'small' | 'medium' | 'large';
}

const PersonPanel: React.FC<IPersonPanelProps> = ({ userInfo, avaSize }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, room, isDealer, avaliableUsers } = useTypedSelector((state) => state.currentUser);
  const { lastName, firstName, avatar, position } = userInfo;

  const isMe = userInfo._id === userId;
  const isNotRoomCreator = room?.roomCreator !== userInfo._id;
  const isVoteAvaliable = avaliableUsers.length > 4;

  const openKickModalByPlayer = async () => {
    const initiator = await getUserById(userId);
    if (room?._id && userInfo?._id) socket.voteStart(room._id, userInfo._id, initiator._id);
  };

  const openKickModalByDealer = async () => {
    const initiator = await getUserById(userId);
    dispatch(kickOutPlayerModal(userInfo, initiator));
  };

  const getUserInfo = (): IAvataraInfo => {
    const userInfoObj: IAvataraInfo = {
      firstName,
      lastName,
      src: avatar,
      size: avaSize,
    };

    return userInfoObj;
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Avatara avatar={getUserInfo()} />
        <Container className={classes.textOverflow}>
          <Typography className={classes.upperText} variant="subtitle2">
            {isMe && 'IT’S YOU'}
          </Typography>
          <Typography variant="h5" className={classes.personName}>
            {userInfo.firstName}
          </Typography>
          <Typography variant="h5" className={classes.personName}>
            {userInfo.lastName || '...'}
          </Typography>
          <Typography className={classes.lowerText} variant="subtitle2">
            {position && position}
          </Typography>
        </Container>
        {((isDealer && !isMe) || (!isMe && isNotRoomCreator && isVoteAvaliable)) && (
          <IconButton className={classes.blockIcon} onClick={isDealer ? openKickModalByDealer : openKickModalByPlayer}>
            <BlockIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default PersonPanel;
