import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { IModalState, ModalActions as actions, ModalTypes } from './modalActionTypes';

const initialState: IModalState = {
  isOpen: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: () => ({ isOpen: false }),
  },
  extraReducers: (builder) => {
    builder.addCase(
      actions.CONNECT_TO_LOBBY,
      (state, action: AnyAction): IModalState => ({
        isOpen: true,
        modalType: ModalTypes.CONNECT_TO_LOBBY,
        linkToLobby: action.payload.linkToLobby,
      })
    );
    builder.addCase(
      actions.KICK_PLAYER,
      (state, action: AnyAction): IModalState => ({
        isOpen: true,
        modalType: ModalTypes.KICK_PLAYER,
        player: action.payload.player,
        initiator: action.payload.initiator,
      })
    );
  },
});

export default modal;
export const { closeModal } = modal.actions;
