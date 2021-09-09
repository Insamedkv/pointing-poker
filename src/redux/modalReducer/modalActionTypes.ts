import { IButton } from '../../defaultTypes';

export const modalActions = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
};

export interface IModalAction {
  type: string;
  payload: IModalPayload;
}

export interface IModalPayload {
  isOpen: boolean;
  title?: React.FC;
  Component?: React.FC;
}

export interface IModalState {
  isOpen: boolean;
  buttons: Array<IButton>;
  title?: React.FC;
  Component?: React.FC;
}
