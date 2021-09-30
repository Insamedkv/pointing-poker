import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import crypto from 'crypto';
import { ICardItem } from './settingsActionTypes';

interface ITime {
  minutes: number;
  seconds: number;
}

interface ISettingsState {
  cardTypes: Array<ICardItem>;
  scrumMasterAsPlayer: boolean;
  changingCardInEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  shortScoreType: string;
  time: ITime;
}

export interface NewCard {
  value: string;
  index: number;
}

const initialState: ISettingsState = {
  scrumMasterAsPlayer: true,
  cardTypes: [],
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
    addNewCard: (state, action: PayloadAction<string>) => {
      const id = crypto.randomBytes(16).toString('hex');
      const newCard: ICardItem = { id, value: action.payload };
      state.cardTypes = [...state.cardTypes, newCard];
    },
    changeCardValues: (state, action: PayloadAction<ICardItem>) => {
      state.cardTypes = state.cardTypes.map((card) => {
        if (card.id === action.payload.id) {
          const updatedCard: ICardItem = {
            id: action.payload.id,
            value: action.payload.value,
          };
          return updatedCard;
        }
        return card;
      });
    },
    deleteOldCard: (state, action: PayloadAction<string>) => {
      state.cardTypes = state.cardTypes.filter((card) => card.id !== action.payload);
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
  addNewCard,
  changeCardValues,
  deleteOldCard,
} = settingsSlice.actions;
