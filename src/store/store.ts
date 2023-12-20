import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    order: orderReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;