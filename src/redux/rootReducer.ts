import { combineReducers } from '@reduxjs/toolkit';
import modal from './modalSlice';
import issueSlice from './issuesSlice/issueSlice';
import settingsSlice from './settingsSlice/settingsSlice';
import chatSlice from './chatSlice/chatSlice';
import userSlice from './userSlice/userSlice';
import gameSlice from './gameSlice/gameSlice';

const rootReducer = combineReducers({
  modal: modal.reducer,
  issues: issueSlice.reducer,
  settings: settingsSlice.reducer,
  currentUser: userSlice.reducer,
  chat: chatSlice.reducer,
  game: gameSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
