import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGameState {
  isRoundstarted: boolean;
  currentIssue: string;
}

const initialState: IGameState = {
  isRoundstarted: false,
  currentIssue: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startRoundInRoom: (state) => {
      state.isRoundstarted = true;
    },
    stopRoundInRoom: (state) => {
      state.isRoundstarted = false;
    },
    toggleRoundInRoom: (state, action: PayloadAction<boolean>) => {
      state.isRoundstarted = action.payload;
    },
    setCurrentIssue: (state, action: PayloadAction<string>) => {
      state.currentIssue = action.payload;
    },
  },
});

export default gameSlice;
export const { startRoundInRoom, stopRoundInRoom, toggleRoundInRoom, setCurrentIssue } = gameSlice.actions;
