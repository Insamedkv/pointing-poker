export const modalActions = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
};

export interface IModalAction {
  type: string;
  payload: IModalPayload;
}

export interface IModalPayload {
  isOpen: boolean;
  modalType?: 'connectToLobby' | 'kick';
}

export interface IModalState {
  isOpen: boolean;
  modalType?: 'connectToLobby' | 'kick';
}
