import { Box, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './Timer.style';
import { socket } from '../../index';

export const Timer: FC = () => {
  const classes = useStyles();
  const { room } = useTypedSelector((state) => state.currentUser);
  const [seconds, setSeconds] = useState<number>(0);
  const dispatch = useDispatch();
  const { isRoundstarted } = useTypedSelector((state) => state.game);

  // useEffect(() => {
  //   if (seconds > 0 && isRoundstarted) {
  //     timer();
  //   } else if (room?._id) {
  //     socket.stopRound(room._id);
  //   } else {
  //     dispatch(stopRoundInRoom());
  //   }
  // }, [isRoundstarted, seconds]);

  useEffect(() => {
    if (isRoundstarted && room && seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (!isRoundstarted || seconds <= 0) {
      if (room?._id) {
        socket.stopRound(room._id);
        setSeconds(room.rules[0].roundTime);
      }
    }
  });

  useEffect(() => {
    if (room?.rules[0]) setSeconds(room.rules[0].roundTime);
  }, [room]);

  return (
    <Container className={classes.timerWrap}>
      <Box component="div" className={classes.timer}>
        <Box component="h2" className={classes.minutes}>
          {Math.floor(seconds / 60) < 10 ? `0${Math.floor(seconds / 60)}` : Math.floor(seconds / 60)}
        </Box>
        <Box component="h2">:</Box>
        <Box component="h2" className={classes.seconds}>
          {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </Box>
      </Box>
    </Container>
  );
};
