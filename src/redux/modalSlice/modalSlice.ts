import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { kickOutPlayer } from './modalActions';
import { IModalState, ModalTypes } from './modalActionTypes';

const initialState: IModalState = {
  isOpen: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: () => ({ isOpen: false }),
    connectToLobby: (state, action: PayloadAction<string | undefined>): IModalState => ({
      isOpen: true,
      modalType: ModalTypes.CONNECT_TO_LOBBY,
      linkToLobby: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(
      kickOutPlayer,
      (state, action): IModalState => ({
        isOpen: true,
        modalType: ModalTypes.KICK_PLAYER,
        player: action.payload.player,
        initiator: action.payload.initiator,
      })
    );
  },
});

export default modal;
export const { closeModal, connectToLobby } = modal.actions;
