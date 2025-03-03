import createSocketConnection from "@/utils/createSocketConnection";
import { Socket } from "socket.io-client";
import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        data,
      }),
      invalidatesTags: [TTagTypes.order, TTagTypes.cart],
    }),
    getAllOrder: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          Object.keys(query).forEach((key) => {
            params.append(key, query[key]);
          });
        }
        return {
          url: `/order`,
          method: "GET",
          params,
        };
      },
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // Initialize the socket connection
        const socket: Socket = createSocketConnection();

        try {
          await cacheDataLoaded;

          // Listen for the 'order' event from the socket
          socket.on("order", (data) => {
            console.log("inside of order event", data);

            updateCachedData((draft) => {
              // Check if the order already exists in the cache
              const existingOrderIndex = draft.findIndex(
                (orderItem: any) => orderItem._id === data._id
              );

              console.log({ existingOrderIndex: existingOrderIndex });

              if (existingOrderIndex >= 0) {
                // Update the existing order
                draft[existingOrderIndex] = data;
                console.log("updating order event");
              } else {
                draft.push(data);
                console.log("adding data");
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
      providesTags: [TTagTypes.order],
    }),
    getSingleOrder: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.order],
    }),
    getAllOrdersForAdmin: builder.query({
      query: () => ({
        url: `/order/admin`,
        method: "GET",
      }),
      providesTags: [TTagTypes.order],
    }),
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/order/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [TTagTypes.order],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TTagTypes.order],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useCancelOrderMutation,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useDeleteOrderMutation,
  useGetAllOrdersForAdminQuery,
} = orderApi;
