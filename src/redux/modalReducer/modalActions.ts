import { IModalAction, modalActions } from './modalActionTypes';

export const toggleModal = (open: boolean, title = '', Component?: React.FC): IModalAction => ({
  type: modalActions.TOGGLE_MODAL,
  payload: {
    title,
    isOpen: open,
    Component,
  },
});
