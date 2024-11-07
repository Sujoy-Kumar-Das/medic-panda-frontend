import getUserInfoToLocalStorage from "@/utils/getUserInfoToLocalStorage";
import { io } from "socket.io-client";
import { baseApi } from "./base.api";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        data,
      }),
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
    }),
    getSingleOrder: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
    }),
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/order/cancel/${id}`,
        method: "PATCH",
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useCancelOrderMutation,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
} = orderApi;
