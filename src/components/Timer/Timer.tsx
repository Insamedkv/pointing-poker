import { Box, Container, IconButton } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useStyles } from './Timer.style';

export const Timer: FC = () => {
  const classes = useStyles();

  const [seconds, setSeconds] = useState(180);
  const [timerActive, setTimerActive] = useState(false);
  const minute = 60;
  const getMinutes = `${Math.floor(seconds / minute)}`;
  const getSeconds = `${seconds % minute}`;

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  return (
    <Container className={classes.timerWrap}>
      <Box component="div" className={classes.timer}>
        <Box component="h2" className={classes.minutes}>
          {getMinutes.length < 2 ? 0 + getMinutes : getMinutes}
        </Box>
        <Box component="h2">:</Box>
        <Box component="h2" className={classes.seconds}>
          {getSeconds.length < 2 ? 0 + getSeconds : getSeconds}
        </Box>
      </Box>
      <Box className={classes.BTNBlock}>
        <IconButton onClick={() => setSeconds(seconds + 30)}>
          <AddCircleIcon />
        </IconButton>
        <button onClick={() => setTimerActive(!timerActive)}>{timerActive ? 'stop' : 'start'}</button>
        <IconButton onClick={() => setSeconds(seconds - 30)}>
          <RemoveCircleIcon />
        </IconButton>
      </Box>
    </Container>
  );
};
