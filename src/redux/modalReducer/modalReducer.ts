import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalAction, IModalPayload, IModalState, modalActions as actions } from './modalActionTypes';

const initialState: IModalState = {
  isOpen: false,
};

const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state: IModalState, action: PayloadAction<IModalPayload>) => ({ ...state, isOpen: action.payload.isOpen }),
  },
  extraReducers: (builder) => {
    builder.addCase(actions.TOGGLE_MODAL, (state, action: IModalAction) => ({
      ...state,
      isOpen: action.payload.isOpen,
      modalType: action.payload.modalType,
    }));
  },
});

export default modalReducer;
