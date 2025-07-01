import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStore } from "next-persist";
import { toast } from "sonner";

export interface ICartItemLocal {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
}

interface ICartState {
  carts: ICartItemLocal[];
}

const initialState: ICartState = {
  carts: [],
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
    addToCartProduct: (state, action: PayloadAction<ICartItemLocal>) => {
      const { id } = action.payload;
      const existingProduct = findProductById(state.carts, id);

      if (existingProduct) {
        toast.error("This product is already in your cart.");
        return;
      }

      state.carts.push({
        ...action.payload,
      });
    },

    removeCartProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.carts = state.carts.filter(
        (item: ICartItemLocal) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCartProduct, removeCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
