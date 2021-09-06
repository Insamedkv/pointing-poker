import { Avatar, Container } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import { useStyles } from './Main.styles';
import MainImage from '../../asset/Main_img.png';

export const Main: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container className={classes.main_container}>
      <Avatar alt="Main__img" src={MainImage} className={classes.image} />
    </Container>
  );
};
