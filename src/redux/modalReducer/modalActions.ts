import { createAction } from '@reduxjs/toolkit';
import { modalActions as actions, IModalPayload } from './modalActionTypes';

const toggleModal = createAction<IModalPayload>(actions.TOGGLE_MODAL);

export { toggleModal };
