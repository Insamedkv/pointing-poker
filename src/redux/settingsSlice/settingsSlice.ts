import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import crypto from 'crypto';
import { ScoreTypes } from 'defaultTypes';
import { doubleCardValues, fibonacciCardValues } from 'utils/share';
import { IScoreType, ICardItem } from './settingsActionTypes';

interface ITime {
  minutes: number;
  seconds: number;
}

interface ISettingsState {
  scrumMasterAsAPlayer: boolean;
  cardTypes: Array<ICardItem>;
  changingCardInEnd: boolean;
  isTimerNeeded: boolean;
  newUsersEnter: boolean;
  autoRotateCardsAfterVote: boolean;
  scoreType: IScoreType;
  shortScoreType: string;
  time: ITime;
}

export interface NewCard {
  value: string;
  index: number;
}

const generateId = () => crypto.randomBytes(16).toString('hex');
const DEFAULT_LENGTH = 3;

const initialState: ISettingsState = {
  scrumMasterAsAPlayer: true,
  cardTypes: [],
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
      let cardValues: Array<ICardItem> = [...state.cardTypes];
      const arrayLength = cardValues.length || DEFAULT_LENGTH;

      if (action.payload === ScoreTypes.POWEROFTWO) {
        const dd = doubleCardValues();
        cardValues = [];
        for (let i = 0; i < arrayLength; i++) {
          const card: ICardItem = { id: generateId(), value: dd.next().value };
          cardValues = [...cardValues, card];
        }
      }

      if (action.payload === ScoreTypes.FIBONACHI) {
        const fib = fibonacciCardValues();
        cardValues = [];
        for (let i = 0; i < arrayLength; i++) {
          const card: ICardItem = { id: generateId(), value: fib.next().value };
          cardValues = [...cardValues, card];
        }
      }

      state.scoreType = action.payload;
      state.cardTypes = cardValues;
    },
    addNewCard: (state, action: PayloadAction<string>) => {
      const id = generateId();
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
  allowNewUserEnter,
  setAutoRotate,
  changeMasterAsPalyer,
  allowChangeCardInEnd,
  toggleTimer,
  setScoreType,
  setShortScoreType,
  setTimer,
  changeScoreType,
  addNewCard,
  changeCardValues,
  deleteOldCard,
} = settingsSlice.actions;
