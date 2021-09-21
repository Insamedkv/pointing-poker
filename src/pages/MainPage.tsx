import { Avatar, Box, Container, Input, Typography, Button, TextField } from '@material-ui/core';
import React, { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRoomById } from 'services/httpRoom';
import { connectToLobby } from 'reduxstore/modalSlice/modalSlice';
import { useStyles } from './MainPage.styles';
import MainImage from '../asset/Main_img.png';
import CustomButton from '../components/CustomButton';

const MainPage: FC = (): ReactElement => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
  const [isRoomExist, setIsRoomExist] = useState<boolean>(false);
  const dispatch = useDispatch();

  const checkLobby = async () => {
    try {
      await getRoomById(value);
      setIsRoomExist(false);
      dispatch(connectToLobby(value));
    } catch (e) {
      setIsRoomExist(true);
      console.log('Error:', e);
    }
  };

  return (
    <Container className={classes.mainContainer}>
      <Avatar alt="MainImg" src={MainImage} className={classes.image} />
      <Box className={classes.startNewGame}>
        <Typography className={classes.title}>Start your planning:</Typography>
        <Box className={classes.wrap}>
          <Box component="span" className={classes.label}>
            Create session:
          </Box>
          <CustomButton
            buttonCaption={'Start new game'}
            className={classes.btn}
            onClick={() => dispatch(connectToLobby())}
          />
        </Box>
      </Box>
      <Box className={classes.connectGame}>
        <Typography className={classes.titleToConnect}>OR:</Typography>
        <Box component="span" className={classes.label}>
          Connect to session:
        </Box>
        <Box className={classes.wrapSecondBlock} id="secondWrap">
          <Input
            className={classes.inputURL}
            disableUnderline
            classes={{ error: classes.inputError }}
            error={isRoomExist}
            onChange={(event) => {
              setValue(event.target.value);
              if (event.target.value !== '') {
                setDisabledBtn(false);
              } else {
                setDisabledBtn(true);
              }
            }}
          />
          <Button className={classes.btnConnect} disabled={disabledBtn} onClick={checkLobby}>
            Connect
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
