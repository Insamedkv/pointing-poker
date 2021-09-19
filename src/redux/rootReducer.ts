import { combineReducers } from '@reduxjs/toolkit';
import modal from './modalSlice';
import issueSlice from './issuesSlice/issueSlice';

const rootReducer = combineReducers({
  modal: modal.reducer,
  issues: issueSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
