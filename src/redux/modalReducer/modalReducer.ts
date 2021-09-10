import { IModalAction, IModalState, modalActions as actions } from './modalActionTypes';

const initialState: IModalState = {
  isOpen: false,
  title: '',
};

const modalReducer = (state = initialState, action: IModalAction): IModalState => {
  switch (action.type) {
    case actions.TOGGLE_MODAL: {
      return {
        isOpen: action.payload.isOpen,
        title: action.payload.title || '',
        Component: action.payload.Component,
      };
    }
    default:
      return state;
  }
};

export { modalReducer };
