import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BlockIcon from '@material-ui/icons/Block';
import { useStyles } from './PersonPanel.styles';
import Avatara from '../Avatara';
import { IAvataraInfo } from '../../defaultTypes';

const testAva: IAvataraInfo = {
  firstName: 'David',
  lastName: 'Blane',
  size: 'large',
  src: 'https://s3-alpha-sig.figma.com/img/7998/d3c3/6ce94d9d22ee71fe300a730249aa5643?Expires=1632096000&Signature=Cx2k0n6qZZcukFwKTktSFpMuGTWdjMziCofIP~COc2nyIbvEpAGHgWMgxCAWY1vKrwHbRh176ZpoF8BH6gyeBBXYuuu-58IVBivd9E2LbXS2~1btzEPeNP0qKnJuGHQiajd4uFO-K50dCaUTbyiUbk96RyEc1Y7YiH-oZ~XWdSjdLIh4Y2jcG8vv-8g8a2XNqpZdeFXo8bazXKPw9OfgFQr-Apa6J~OT4iHkACZOe6HUV2rxNUEzWFT6jagU6fCcvmDzlp1UEr84Cl13n4-1pLErH6KC5~XOzPA1B9ZRcZZkD8fDrSd31vPOmHPcMj6GF4vqH7opU1f7c~Kq-kcIFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
};

interface IPersonPanelProps {
  userInfo: {
    firstName: string;
    lastName: string;
    imgPath: string;
    position: string;
  };
}

const PersonPanel: React.FC<IPersonPanelProps> = ({ userInfo }) => {
  const classes = useStyles();
  const { lastName, firstName, imgPath, position } = userInfo;

  const isDiller = true;
  const whatAmI = true;

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
          <Typography variant="h2">
            {testAva.firstName} {testAva.lastName}
          </Typography>
          <Typography className={classes.lowerText} variant="subtitle2">
            {position && position}
          </Typography>
        </Container>
        {isDiller && <BlockIcon className={classes.blockIcon} />}
      </CardContent>
    </Card>
  );
};

export default PersonPanel;
