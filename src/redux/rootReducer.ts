import { combineReducers } from '@reduxjs/toolkit';
import modal from './modalSlice';

const rootReducer = combineReducers({
  modal: modal.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
