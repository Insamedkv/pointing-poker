import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'defaultTypes';
import { UserResp } from 'services/serviceTypes';
import { kickOutPlayerModal } from './modalActions';
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
      roomId: action.payload,
    }),
    createIssueModal: (): IModalState => ({
      isOpen: true,
      modalType: ModalTypes.CREATE_ISSUE,
    }),
    editIssueModal: (state, action: PayloadAction<string>) => ({
      // string = issue ID
      isOpen: true,
      modalType: ModalTypes.CREATE_ISSUE,
      editableIssueID: action.payload,
    }),
    admitPlayerModal: (state, action: PayloadAction<IUserInfo>) => ({
      isOpen: true,
      modalType: ModalTypes.ADMIT_PLAYER,
      player: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(
      kickOutPlayerModal,
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
export const { closeModal, connectToLobby, createIssueModal, editIssueModal, admitPlayerModal } = modal.actions;
