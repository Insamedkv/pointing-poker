import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Fade, FormControlLabel, Switch } from '@material-ui/core';
import CustomInput from 'components/CustomInput';
import SectionHeader from 'components/SectionHeader';
import { Timer } from 'components/Timer';
import { useTypedSelector } from 'hooks/useTypedSelector';
import {
  allowChangeCardInEnd,
  changeMasterAsPalyer,
  setScoreType,
  setShortScoreType,
  toggleTimer,
} from 'reduxstore/settingsSlice/settingsSlice';
import { useStyles } from './GameSettings.styles';

const GameSettings: React.FC = () => {
  const classes = useStyles();
  const gameSettings = useTypedSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <Container component="section" className={classes.gameSettingsContainer}>
      <SectionHeader header="Game settings" />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <Switch
            className={classes.switcherStyles}
            name="asObserver"
            color="primary"
            checked={gameSettings.scrumMasterAsPlayer}
            onChange={(event) => {
              const { checked } = event.target;
              dispatch(changeMasterAsPalyer(checked));
            }}
          />
        }
        label="Scrum master as player:"
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        checked={gameSettings.changingCardInEnd}
        control={
          <Switch
            className={classes.switcherStyles}
            name="asObserver"
            color="primary"
            onChange={(event) => {
              const { checked } = event.target;
              dispatch(allowChangeCardInEnd(checked));
            }}
          />
        }
        label="Changing card in round end:"
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <Switch
            className={classes.switcherStyles}
            name="asObserver"
            color="primary"
            checked={gameSettings.isTimerNeeded}
            onChange={(event) => {
              const { checked } = event.target;
              dispatch(toggleTimer(checked));
            }}
          />
        }
        label="Is timer needed:"
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <CustomInput
            input={{ label: '', value: gameSettings.scoreType }}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setScoreType(value));
            }}
          />
        }
        label="Score type:"
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <CustomInput
            input={{ label: '', value: gameSettings.shortScoreType }}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setShortScoreType(value));
            }}
          />
        }
        label="Score type(short):"
        labelPlacement="start"
      />
      <Fade in={gameSettings.isTimerNeeded}>
        <FormControlLabel
          className={classes.controlSize}
          classes={{ label: classes.label }}
          control={<Timer />}
          label="Round time:"
          labelPlacement="start"
        />
      </Fade>
    </Container>
  );
};

export default GameSettings;
