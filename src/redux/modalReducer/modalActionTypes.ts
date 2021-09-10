export const modalActions = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
};

export interface IModalAction {
  type: string;
  payload: IModalPayload;
}

export interface IModalPayload {
  isOpen: boolean;
  title: string;
  Component?: React.FC;
}

export interface IModalState {
  isOpen: boolean;
  title?: string;
  Component?: React.FC;
}
