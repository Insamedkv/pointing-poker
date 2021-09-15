import { Avatar, Box, Container, Input, Typography } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { toggleModal } from 'reduxstore/modalSlice/modalActions';
import { useDispatch } from 'react-redux';
import { useStyles } from './MainPage.styles';
import MainImage from '../asset/Main_img.png';
import CustomButton from '../components/CustomButton';
import ModalWindow from '../components/Modal/index';

const MainPage: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
        <Box className={classes.wrapSecondBlock} id="secondWrap">
          <Input className={classes.inputURL} />
          <CustomButton
            buttonCaption="Connect"
            className={classes.btn}
            onClick={() => dispatch(toggleModal({ isOpen: true, modalType: 'connectToLobby' }))}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
