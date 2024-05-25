// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishListItems: [],
    totalwishListItems: 0,
    totalPrice: 0, // Initialize totalPrice
  },
  reducers: {
    addItemList: (state, action) => {
      const { id, new_price } = action.payload;
      const existingItem = state.wishListItems.find(item => item.id === id);
      if (!existingItem) {
        // If the item doesn't exist, add it to the wishlist
        state.wishListItems.push({ ...action.payload, quantity: 1 });
        state.totalPrice += new_price; // Increment total price
        state.totalwishListItems++; // Increment total wishlist items
      }
    },
    removeItemList: (state, action) => {
      const { id } = action.payload;
      const index = state.wishListItems.findIndex(item => item.id === id);
      if (index !== -1) {
        const removedQuantity = state.wishListItems[index].quantity;
        state.totalwishListItems -= removedQuantity;
        state.totalPrice -= state.wishListItems[index].new_price * removedQuantity;
        state.wishListItems.splice(index, 1);
      }
    },
    clearList: state => {
      state.wishListItems = [];
      state.totalwishListItems = 0;
      state.totalPrice = 0;
    },
   
    loadList: (state, action) => {
      state.wishListItems = action.payload;
      state.totalwishListItems = action.payload.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addItemList, removeItemList, clearList, loadList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
