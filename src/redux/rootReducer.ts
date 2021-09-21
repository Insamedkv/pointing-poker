import { combineReducers } from '@reduxjs/toolkit';
import modal from './modalSlice';
import issueSlice from './issuesSlice/issueSlice';
import settingsSlice from './settingsSlice/settingsSlice';
import userSlice from './userSlice/userSlice';

const rootReducer = combineReducers({
  modal: modal.reducer,
  issues: issueSlice.reducer,
  settings: settingsSlice.reducer,
  currentUser: userSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
