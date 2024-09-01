import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
  quantity?: number;
  totalPrice?: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as ICartItem[],
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const { id, quantity = 1, price } = action.payload;
      const existingProduct = state.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity ?? 0) + quantity;
        existingProduct.totalPrice = existingProduct.quantity * price;
      } else {
        state.push({
          ...action.payload,
          quantity,
          totalPrice: quantity * price,
        });
      }
    },
    removeSingleProduct: (
      state,
      action: PayloadAction<{ id: string; quantity?: number }>
    ) => {
      const { id, quantity = 1 } = action.payload;
      const existingProduct = state.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity ?? 0) - quantity;

        if (existingProduct.quantity <= 0) {
          const index = state.indexOf(existingProduct);
          state.splice(index, 1);
        } else {
          existingProduct.totalPrice =
            existingProduct.quantity * existingProduct.price;
        }
      }
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeSingleProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
