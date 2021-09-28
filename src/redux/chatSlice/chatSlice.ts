import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const chatSlice = createSlice({
  name: 'chatik',
  initialState,
  reducers: {
    toggleChat: (state, action: PayloadAction<boolean | undefined>) => action.payload || !state,
  },
});

export default chatSlice;
export const { toggleChat } = chatSlice.actions;
