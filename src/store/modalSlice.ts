import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItem, RootState } from '../types/types';

interface ModalState {
  isOpen: boolean;
  selectedItem: OrderItem | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedItem: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
      openModal: (state, action: PayloadAction<OrderItem>) => {
        console.log('Opening modal with item:', action.payload);
        return {
          ...state,
          isOpen: true,
          selectedItem: action.payload,
        };
      },
      closeModal: (state) => {
        return {
          ...state,
          isOpen: false,
          selectedItem: null,
        };
      },
  },
});




export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;