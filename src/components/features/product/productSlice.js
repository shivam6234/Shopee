import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: [], // Initialize as an empty array
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = [action.payload]; // Replace the array with a new array containing the new item
    },
    clearSelectedProduct(state) {
      state.selectedProduct = []; // Clear the array
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
