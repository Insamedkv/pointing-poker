import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGamePayloadStatus, IUserInfo, Room } from 'defaultTypes';
import { SignupResp } from 'services/serviceTypes';

interface IUserDatastate {
  userId: string;
  token: string;
  isDealer: boolean;
  isObserver: boolean;
  room?: Room;
  avaliableUsers: Array<string>;
  startUsersNumber?: number;
}

const initialState: IUserDatastate = {
  userId: '',
  token: '',
  isObserver: false,
  isDealer: false,
  avaliableUsers: [],
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
      avaliableUsers: action.payload.room.users.map((user) => user.user),
    }),
    updateRoomUsers: (state, action: PayloadAction<Array<IUserInfo>>) => {
      const avaliableUsers: Array<string> = action.payload.map((user) => user._id as string);
      if (state.room) state.avaliableUsers = avaliableUsers;
    },
    toggleGameInRoom: (state, action: PayloadAction<IGamePayloadStatus>) => {
      if (state.room) state.room.gameStatus = action.payload;
    },
    setObserverStatus: (state, action: PayloadAction<boolean>) => {
      state.isObserver = action.payload;
    },
    setUsersNumber: (state, action: PayloadAction<number>) => ({
      ...state,
      startUsersNumber: action.payload,
    }),
  },
});

export default userSlice;
export const { setUserCredentials, updateRoomUsers, toggleGameInRoom, setObserverStatus, setUsersNumber } =
  userSlice.actions;
