import { combineReducers } from '@reduxjs/toolkit';
import modal from './modalSlice';
import settingsSlice from './settingsSlice/settingsSlice';

const rootReducer = combineReducers({
  modal: modal.reducer,
  settings: settingsSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
