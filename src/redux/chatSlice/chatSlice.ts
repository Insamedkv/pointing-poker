import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessagesResp } from 'services/serviceTypes';

interface IChatState {
  isOpen: boolean;
  chat: Array<MessagesResp>;
}

const initialState: IChatState = {
  isOpen: true,
  chat: [],
};

const chatSlice = createSlice({
  name: 'chatik',
  initialState,
  reducers: {
    toggleChat: (state, action: PayloadAction<boolean | undefined>) => ({
      ...state,
      isOpen: action.payload || !state.isOpen,
    }),
    setMessages: (state, action: PayloadAction<Array<MessagesResp>>) => ({
      ...state,
      chat: action.payload,
    }),
    pushMessage: (state, action: PayloadAction<MessagesResp>) => {
      state.chat = [...state.chat, action.payload];
    },
  },
});

export default chatSlice;
export const { toggleChat, setMessages, pushMessage } = chatSlice.actions;
