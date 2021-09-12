import { combineReducers } from '@reduxjs/toolkit';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
