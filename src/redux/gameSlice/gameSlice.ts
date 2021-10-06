import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bet } from 'services/serviceTypes';

interface IGameState {
  isRoundstarted: boolean;
  currentIssue: string;
  currentBet: string;
  userBets: Array<Bet>;
}

const initialState: IGameState = {
  isRoundstarted: false,
  currentIssue: '',
  currentBet: '',
  userBets: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startRoundInRoom: (state) => {
      state.isRoundstarted = true;
      state.userBets = [];
      state.currentBet = '';
    },
    stopRoundInRoom: (state) => {
      state.isRoundstarted = false;
    },
    toggleRoundInRoom: (state, action: PayloadAction<boolean>) => {
      state.isRoundstarted = action.payload;
      state.userBets = action.payload ? [] : state.userBets;
      state.currentBet = action.payload ? '' : state.currentBet;
    },
    setCurrentIssue: (state, action: PayloadAction<string>) => {
      state.currentIssue = action.payload;
    },
    setBet: (state, action: PayloadAction<string>) => {
      state.currentBet = action.payload;
    },
    setUsersBets: (state, action: PayloadAction<Array<Bet>>) => {
      state.userBets = action.payload;
    },
  },
});

export default gameSlice;
export const { startRoundInRoom, stopRoundInRoom, toggleRoundInRoom, setCurrentIssue, setBet, setUsersBets } =
  gameSlice.actions;
