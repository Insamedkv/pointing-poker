import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { setTimer } from 'reduxstore/settingsSlice/settingsSlice';
import { Container, Input, Typography } from '@material-ui/core';
import { useStyles } from './SetTimeComponent.style';

const SECONDS = 'seconds';
const MINUTES = 'minutes';
const MAX_MIN = 99;
const MAX_SEC = 59;

const SetTimeComponent: React.FC = () => {
  const classes = useStyles();
  const { time } = useTypedSelector((state) => state.settings);
  const dispatch = useDispatch();

  const transformValue = (value: string | number) => {
    const result = Number(value) < 10 ? `0${value}` : `${value}`;
    return result;
  };

  const checkValue = (value: number, maxValue: number) => {
    if (value > maxValue) return maxValue;
    if (value < 0) return 0;
    return value;
  };

  const setTimeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value, name } = event.target;
    const maxValue = name === SECONDS ? MAX_SEC : MAX_MIN;
    const updatedTime = { ...time, [name]: checkValue(Number(value), maxValue) };
    dispatch(setTimer(updatedTime));
  };

  return (
    <Container className={classes.timerContainer}>
      <Input
        inputProps={{ max: MAX_MIN, min: 0 }}
        classes={{ input: classes.inputTime }}
        type="number"
        name={MINUTES}
        value={transformValue(time.minutes)}
        onChange={(event) => setTimeValue(event)}
      />
      <Typography variant="h4" className={classes.timeDivider}>
        :
      </Typography>
      <Input
        inputProps={{ max: MAX_SEC, min: 0 }}
        classes={{ input: classes.inputTime }}
        type="number"
        name={SECONDS}
        value={transformValue(time.seconds)}
        onChange={(event) => setTimeValue(event)}
      />
    </Container>
  );
};

export default SetTimeComponent;
