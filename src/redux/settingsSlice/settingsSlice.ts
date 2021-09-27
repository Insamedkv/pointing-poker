import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScoreTypes } from 'defaultTypes';
import { IScoreType } from './settingsActionTypes';

interface ITime {
  minutes: number;
  seconds: number;
}

interface ISettingsState {
  scrumMasterAsAPlayer: boolean;
  changingCardInEnd: boolean;
  isTimerNeeded: boolean;
  newUsersEnter: boolean;
  autoRotateCardsAfterVote: boolean;
  scoreType: IScoreType;
  shortScoreType: string;
  time: ITime;
  cardType?: undefined;
}

const initialState: ISettingsState = {
  scrumMasterAsAPlayer: true,
  changingCardInEnd: false,
  isTimerNeeded: true,
  newUsersEnter: true,
  autoRotateCardsAfterVote: false,
  scoreType: ScoreTypes.POWEROFTWO,
  shortScoreType: 'SP',
  time: {
    minutes: 2,
    seconds: 30,
  },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeMasterAsPalyer: (state, action: PayloadAction<boolean>) => {
      state.scrumMasterAsAPlayer = action.payload;
    },
    allowChangeCardInEnd: (state, action: PayloadAction<boolean>) => {
      state.changingCardInEnd = action.payload;
    },
    toggleTimer: (state, action: PayloadAction<boolean>) => {
      state.isTimerNeeded = action.payload;
    },
    allowNewUserEnter: (state, action: PayloadAction<boolean>) => {
      state.newUsersEnter = action.payload;
    },
    setAutoRotate: (state, action: PayloadAction<boolean>) => {
      state.autoRotateCardsAfterVote = action.payload;
    },
    setScoreType: (state, action: PayloadAction<IScoreType>) => {
      state.scoreType = action.payload;
    },
    setShortScoreType: (state, action: PayloadAction<string>) => {
      state.shortScoreType = action.payload;
    },
    setTimer: (state, action: PayloadAction<ITime>) => {
      state.time = action.payload;
    },
    changeScoreType: (state, action: PayloadAction<IScoreType>) => {
      state.scoreType = action.payload;
    },
  },
});

export default settingsSlice;
export const {
  allowNewUserEnter,
  setAutoRotate,
  changeMasterAsPalyer,
  allowChangeCardInEnd,
  toggleTimer,
  setScoreType,
  setShortScoreType,
  setTimer,
  changeScoreType,
} = settingsSlice.actions;
