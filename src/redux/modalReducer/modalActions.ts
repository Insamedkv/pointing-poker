import { IModalAction, modalActions } from './modalActionTypes';

export const toggleModal = (open: boolean, Component?: React.FC): IModalAction => ({
  type: modalActions.TOGGLE_MODAL,
  payload: {
    isOpen: open,
    Component,
  },
});
