import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BlockIcon from '@material-ui/icons/Block';
import { useStyles } from './PersonPanel.styles';
import Avatara from '../Avatara';
import { IAvataraInfo, IUserInfo } from '../../defaultTypes';

const myId = 2;

interface IPersonPanelProps {
  userInfo: IUserInfo;
}

const PersonPanel: React.FC<IPersonPanelProps> = ({ userInfo }) => {
  const classes = useStyles();
  const { lastName, firstName, imgPath, position } = userInfo;

  const isDealer = true;
  const whatAmI = myId === userInfo.id;

  const getUserInfo = (): IAvataraInfo => {
    const userInfoObj: IAvataraInfo = {
      firstName,
      lastName,
      src: imgPath,
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
