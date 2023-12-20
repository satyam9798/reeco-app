import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../types/types';


interface OrderItem {
    id: string;
    name: string;
    brand: string;
    price: string;
    quantity: string;
    total: string;
    status: string;
  }

interface OrderState {
    items: OrderItem[]; 
}

const initialState: OrderState = {
    items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
    reducers: {
        setItems: (state, action: PayloadAction<OrderItem[]>) => {
            state.items = action.payload;
          },
        approveOrderItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
  
            if (item) {
                item.status = item.status === 'Approved' ? '' : 'Approved'
            }
        },
        updateItemStatus: (state, action: PayloadAction<{ itemId: string; status: string }>) => {
            const { itemId, status } = action.payload;
            console.log(itemId, status)
            const item = state.items.find((i) => i.id === itemId);
      
            if (item) {
              item.status = status;
            }
          },
    },
});

export const { setItems, approveOrderItem, updateItemStatus } = orderSlice.actions;

export default orderSlice.reducer;
