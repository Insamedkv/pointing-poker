import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScoreTypes } from 'defaultTypes';
import { doubleCardValues, fibonacciCardValues } from 'utils/share';
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
  cardType: Array<string | number>;
}

const initialState: ISettingsState = {
  scrumMasterAsAPlayer: true,
  changingCardInEnd: false,
  isTimerNeeded: true,
  newUsersEnter: true,
  autoRotateCardsAfterVote: false,
  scoreType: ScoreTypes.POWEROFTWO,
  shortScoreType: 'SP',
  cardType: [2, 4, 8],
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
      let cardValues: Array<string | number> = [...state.cardType];

      if (action.payload === ScoreTypes.POWEROFTWO) {
        const dd = doubleCardValues();
        cardValues = [];
        for (let i = 0; i < 7; i++) {
          cardValues = [...cardValues, dd.next().value];
        }
      }

      if (action.payload === ScoreTypes.FIBONACHI) {
        const fib = fibonacciCardValues();
        cardValues = [];
        for (let i = 0; i < 7; i++) {
          cardValues = [...cardValues, fib.next().value];
        }
      }

      state.scoreType = action.payload;
      state.cardType = cardValues;
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
