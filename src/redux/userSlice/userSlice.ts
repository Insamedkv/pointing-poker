import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room } from 'defaultTypes';
import { SignupResp } from 'services/serviceTypes';

interface IUserDatastate {
  userId: string;
  token: string;
  room: Room | undefined;
  isDealer: boolean;
  isObserver: boolean;
}

const initialState: IUserDatastate = {
  userId: '',
  room: undefined,
  token: '',
  isObserver: false,
  isDealer: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (state, action: PayloadAction<SignupResp>) => ({
      userId: action.payload.userData._id,
      token: action.payload.authorization,
      room: action.payload.room,
      isDealer: action.payload.room.roomCreator === action.payload.userData._id,
      isObserver: action.payload.userData.asObserver,
    }),
    updateRoomUsers: (state, action: PayloadAction<Room>) => ({
      ...state,
      room: action.payload,
    }),
    toggleGameInRoom: (state, action: PayloadAction<boolean>) => {
      if (state.room) state.room.isGameStarted = action.payload;
    },
    setObserverStatus: (state, action: PayloadAction<boolean>) => {
      state.isObserver = action.payload;
    },
  },
});

export default userSlice;
export const { setUserCredentials, updateRoomUsers, toggleGameInRoom, setObserverStatus } = userSlice.actions;
