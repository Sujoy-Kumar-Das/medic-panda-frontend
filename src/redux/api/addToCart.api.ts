import createSocketConnection from "@/utils/createSocketConnection";
import { Socket } from "socket.io-client";
import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

export const addToCartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data: any) => {
        return {
          url: "/cart",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [TTagTypes.cart],
    }),
    getAllCartProducts: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // Initialize the socket connection
        const socket: Socket = createSocketConnection();

        try {
          await cacheDataLoaded;

          // Listen for the 'order' event from the socket
          socket.on("cart", (data) => {
            updateCachedData((draft) => {
              // Check if the order already exists in the cache
              const existingOrderIndex = draft.findIndex(
                (cartItem: any) => cartItem._id === data._id
              );

              if (existingOrderIndex >= 0) {
                // Update the existing order
                draft[existingOrderIndex] = data;
              } else {
                draft.push(data);
              }
            });
          });
        } catch (error) {
          console.error("Error handling socket updates:", error);
        }

        // Clean up the socket connection when the cache entry is removed
        await cacheEntryRemoved;
        socket.disconnect();
      },
      providesTags: [TTagTypes.cart],
    }),
    getSingleCartProducts: builder.query({
      query: (id: string) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.cart],
    }),
    getCartLength: builder.query({
      query: () => ({
        url: `/cart-length`,
        method: "GET",
      }),
      providesTags: [TTagTypes.cart],
    }),
    incrementCartProduct: builder.mutation({
      query: (data: any) => {
        return {
          url: `/cart/${data.id}`,
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [TTagTypes.cart],
    }),
    removeCartProduct: builder.mutation({
      query: (data: any) => {
        return {
          url: `/cart/${data.product}`,
          method: "DELETE",
          data,
        };
      },
      invalidatesTags: [TTagTypes.cart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartProductsQuery,
  useGetSingleCartProductsQuery,
  useRemoveCartProductMutation,
  useIncrementCartProductMutation,
  useGetCartLengthQuery,
} = addToCartApi;
