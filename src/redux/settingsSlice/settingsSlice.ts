import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITime {
  minutes: number;
  seconds: number;
}

interface ISettingsState {
  scrumMasterAsPlayer: boolean;
  changingCardInEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  shortScoreType: string;
  time: ITime;
}

const initialState: ISettingsState = {
  scrumMasterAsPlayer: true,
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
    changeMasterAsPalyer: (state, action: PayloadAction<boolean>) => ({
      ...state,
      scrumMasterAsPlayer: action.payload,
    }),
    allowChangeCardInEnd: (state, action: PayloadAction<boolean>) => ({
      ...state,
      changingCardInEnd: action.payload,
    }),
    toggleTimer: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isTimerNeeded: action.payload,
    }),
    setScoreType: (state, action: PayloadAction<string>) => ({
      ...state,
      scoreType: action.payload,
    }),
    setShortScoreType: (state, action: PayloadAction<string>) => ({
      ...state,
      shortScoreType: action.payload,
    }),
    setTimer: (state, action: PayloadAction<ITime>) => ({
      ...state,
      time: action.payload,
    }),
  },
});

export default settingsSlice;
export const { changeMasterAsPalyer, allowChangeCardInEnd, toggleTimer, setScoreType, setShortScoreType, setTimer } =
  settingsSlice.actions;
