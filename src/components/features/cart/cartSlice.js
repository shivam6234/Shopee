// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, new_price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
      state.totalPrice += new_price;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        const removedQuantity = state.items[index].quantity;
        state.totalItems -= removedQuantity;
        state.totalPrice -= state.items[index].new_price * removedQuantity;
        state.items.splice(index,1);
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    popItem: (state, action) => {
      const { id } = action.payload;
      // const index = state.items.findIndex(item => item.id === id);
      const existingItem = state.items.find(item => item.id === id);
      // if ( state.items[index].quantity > 1) {
      if ( existingItem.quantity > 1) {
     existingItem.quantity--;
        state.totalItems--;
        state.totalPrice -= existingItem.new_price;
      }
    },
    loadCart: (state, action) => {
      state.items = action.payload;
      state.totalItems = action.payload.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = action.payload.reduce((total, item) => total + (item.new_price * item.quantity), 0);
    },
  },
});

export const {addItem,  removeItem, clearCart, popItem, loadCart } = cartSlice.actions;

export default cartSlice.reducer;
