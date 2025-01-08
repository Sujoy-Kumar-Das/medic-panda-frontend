import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStore } from "next-persist";

export interface ICartItemLocal {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
  quantity?: number;
  totalPrice?: number;
}

interface ICartState {
  carts: ICartItemLocal[];
}

const initialState: ICartState = {
  carts: [],
};

const calculateTotalPrice = (quantity: number, price: number): number => {
  return quantity * price;
};

const findProductById = (
  carts: ICartItemLocal[],
  id: string
): ICartItemLocal | undefined => {
  return carts.find((item) => item.id === id);
};

const persistedState = getLocalStore("cart", initialState);

const cartSlice = createSlice({
  name: "cart",
  initialState: persistedState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItemLocal>) => {
      const { id, quantity = 1, price } = action.payload;
      const existingProduct = findProductById(state.carts, id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity ?? 0) + quantity;
        existingProduct.totalPrice = calculateTotalPrice(
          existingProduct.quantity,
          price
        );
      } else {
        state.carts.push({
          ...action.payload,
          quantity,
          totalPrice: calculateTotalPrice(quantity, price),
        });
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity?: number }>
    ) => {
      const { id, quantity = 1 } = action.payload;
      const existingProduct = findProductById(state.carts, id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity ?? 0) + quantity;
        existingProduct.totalPrice = calculateTotalPrice(
          existingProduct.quantity,
          existingProduct.price
        );
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity?: number }>
    ) => {
      const { id, quantity = 1 } = action.payload;
      const existingProduct = findProductById(state.carts, id);

      if (existingProduct) {
        const currentQuantity = existingProduct.quantity ?? 0;

        if (currentQuantity > quantity) {
          existingProduct.quantity = currentQuantity - quantity;
          existingProduct.totalPrice = calculateTotalPrice(
            existingProduct.quantity,
            existingProduct.price
          );
        } else {
          state.carts = state.carts.filter(
            (item: ICartItemLocal) => item.id !== id
          );
        }
      }
    },

    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.carts = state.carts.filter(
        (item: ICartItemLocal) => item.id !== action.payload.id
      );
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
