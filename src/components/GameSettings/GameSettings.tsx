import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Fade, FormControlLabel, MenuItem, Select, Switch } from '@material-ui/core';
import CustomInput from 'components/CustomInput';
import SectionHeader from 'components/SectionHeader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import SetTimeComponent from 'components/SetTimeComponent';
import {
  allowChangeCardInEnd,
  allowNewUserEnter,
  changeMasterAsPalyer,
  changeScoreType,
  setAutoRotate,
  setShortScoreType,
  toggleTimer,
} from 'reduxstore/settingsSlice/settingsSlice';
import { IScoreType } from 'reduxstore/settingsSlice/settingsActionTypes';
import { ScoreTypes } from 'defaultTypes';
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
            classes={{
              root: classes.switcherRoot,
              switchBase: classes.switcherBase,
              checked: classes.checked,
              track: classes.track,
              thumb: classes.thumb,
            }}
            name="asObserver"
            color="primary"
            checked={gameSettings.scrumMasterAsAPlayer}
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
            classes={{
              root: classes.switcherRoot,
              switchBase: classes.switcherBase,
              checked: classes.checked,
              track: classes.track,
              thumb: classes.thumb,
            }}
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
            classes={{
              root: classes.switcherRoot,
              switchBase: classes.switcherBase,
              checked: classes.checked,
              track: classes.track,
              thumb: classes.thumb,
            }}
            name="newUserEnter"
            color="primary"
            checked={gameSettings.newUsersEnter}
            onChange={(event) => {
              const { checked } = event.target;
              dispatch(allowNewUserEnter(checked));
            }}
          />
        }
        label="Admit all new users:"
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <Switch
            classes={{
              root: classes.switcherRoot,
              switchBase: classes.switcherBase,
              checked: classes.checked,
              track: classes.track,
              thumb: classes.thumb,
            }}
            name="timer"
            color="primary"
            checked={gameSettings.autoRotateCardsAfterVote}
            onChange={(event) => {
              const { checked } = event.target;
              dispatch(setAutoRotate(checked));
            }}
          />
        }
        label="Auto rotate card after vote:"
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <Switch
            classes={{
              root: classes.switcherRoot,
              switchBase: classes.switcherBase,
              checked: classes.checked,
              track: classes.track,
              thumb: classes.thumb,
            }}
            name="timer"
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
      {/* Score type: */}
      <FormControlLabel
        className={classes.controlSize}
        classes={{ label: classes.label }}
        control={
          <Select
            fullWidth
            className={classes.selectSize}
            name="cardType"
            classes={{ select: classes.selectField }}
            color="primary"
            value={gameSettings.scoreType}
            disableUnderline
            defaultValue={ScoreTypes.FIBONACHI}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(changeScoreType(value as IScoreType));
            }}
          >
            <MenuItem value={ScoreTypes.FIBONACHI}>Fibonachi</MenuItem>
            <MenuItem value={ScoreTypes.POWEROFTWO}>Power of two</MenuItem>
            <MenuItem value={ScoreTypes.CUSTOM}>Custom</MenuItem>
          </Select>
        }
        label="Score type:"
        labelPlacement="start"
      />
      {/* <FormControlLabel
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
      /> */}
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
          control={<SetTimeComponent />}
          label="Round time:"
          labelPlacement="start"
        />
      </Fade>
    </Container>
  );
};

export default GameSettings;
