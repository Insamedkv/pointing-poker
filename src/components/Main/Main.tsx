import { Avatar, Container } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import { useStyles } from './Main.styles';
import MainImage from '../../asset/Main_img.png';

export const Main: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Avatar alt="MainImg" src={MainImage} className={classes.image} />
    </Container>
  );
};
