import { Avatar, Box, Container, Input, Typography } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import { useStyles } from './MainPage.styles';
import MainImage from '../asset/Main_img.png';
import CustomButton from '../components/CustomButton';

const MainPage: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Avatar alt="MainImg" src={MainImage} className={classes.image} />
      <Box className={classes.startNewGame}>
        <Typography className={classes.title}>Start your planning:</Typography>
        <Box className={classes.wrap}>
          <Box component="span" className={classes.label}>
            Create session:
          </Box>
          <CustomButton buttonCaption={'Start new game'} className={classes.btn} />
        </Box>
      </Box>
      <Box className={classes.connectGame}>
        <Typography className={classes.titleToConnect}>OR:</Typography>
        <Box component="span" className={classes.label}>
          Create session:
        </Box>
        <Box className={classes.wrapSecondBlock}>
          <Input className={classes.inputURL} />
          <CustomButton buttonCaption="Connect" />
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
