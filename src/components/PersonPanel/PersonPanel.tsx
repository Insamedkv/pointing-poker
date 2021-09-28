import React, { useEffect } from 'react';
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

interface IPersonPanelProps {
  userInfo: IUserInfo;
  avaSize: 'small' | 'medium' | 'large';
}

const PersonPanel: React.FC<IPersonPanelProps> = ({ userInfo, avaSize }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, room, isDealer } = useTypedSelector((state) => state.currentUser);
  const { lastName, firstName, avatar, position } = userInfo;

  const whatAmI = userInfo._id === userId;

  const openKickPlayerModal = async () => {
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
        <Container>
          <Typography className={classes.upperText} variant="subtitle2">
            {whatAmI && 'IT’S YOU'}
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
        {isDealer && !whatAmI && (
          <IconButton className={classes.blockIcon} onClick={openKickPlayerModal}>
            <BlockIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default PersonPanel;
