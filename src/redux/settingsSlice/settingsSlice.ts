import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITime {
  minutes: number;
  seconds: number;
}

interface ISettingsState {
  cardTypes: Array<string>;
  scrumMasterAsPlayer: boolean;
  changingCardInEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  shortScoreType: string;
  time: ITime;
}

const initialState: ISettingsState = {
  scrumMasterAsPlayer: true,
  cardTypes: ['1', '2', '4'],
  changingCardInEnd: false,
  isTimerNeeded: true,
  scoreType: 'Story Points',
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
      state.scrumMasterAsPlayer = action.payload;
    },
    allowChangeCardInEnd: (state, action: PayloadAction<boolean>) => {
      state.changingCardInEnd = action.payload;
    },
    toggleTimer: (state, action: PayloadAction<boolean>) => {
      state.isTimerNeeded = action.payload;
    },
    setScoreType: (state, action: PayloadAction<string>) => {
      state.scoreType = action.payload;
    },
    setShortScoreType: (state, action: PayloadAction<string>) => {
      state.shortScoreType = action.payload;
    },
    setTimer: (state, action: PayloadAction<ITime>) => {
      state.time = action.payload;
    },
    addNewcard: (state, action: PayloadAction<string>) => {
      state.cardTypes = [...state.cardTypes, action.payload];
    },
    deleteOldCard: (state, action: PayloadAction<number>) => {
      state.cardTypes = [...state.cardTypes.slice(0, action.payload), ...state.cardTypes.slice(action.payload + 1)];
    },
  },
});

export default settingsSlice;
export const {
  changeMasterAsPalyer,
  allowChangeCardInEnd,
  toggleTimer,
  setScoreType,
  setShortScoreType,
  setTimer,
  addNewcard,
  deleteOldCard,
} = settingsSlice.actions;
