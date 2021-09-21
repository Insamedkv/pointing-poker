import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BlockIcon from '@material-ui/icons/Block';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './PersonPanel.styles';
import Avatara from '../Avatara';
import { IAvataraInfo, IUserInfo } from '../../defaultTypes';

interface IPersonPanelProps {
  userInfo: IUserInfo;
}

const PersonPanel: React.FC<IPersonPanelProps> = ({ userInfo }) => {
  const classes = useStyles();
  const { userId, room } = useTypedSelector((state) => state.currentUser);
  const { lastName, firstName, avatar, position } = userInfo;

  const isDealer = userId === room?.roomCreator;
  const whatAmI = userInfo._id === userId;

  const getUserInfo = (): IAvataraInfo => {
    const userInfoObj: IAvataraInfo = {
      firstName,
      lastName,
      src: avatar,
      size: 'large',
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
        {isDealer && !whatAmI && <BlockIcon className={classes.blockIcon} />}
      </CardContent>
    </Card>
  );
};

export default PersonPanel;
