import { combineReducers } from '@reduxjs/toolkit';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
