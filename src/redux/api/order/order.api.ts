import { TTagTypes } from "../../tag-types";
import { baseApi } from "../base.api";
import {
  cancelOrderMutation,
  changeOrderStatusMutation,
  deleteOrderMutation,
  placeOrderMutation,
} from "./mutation";
import {
  getAllOrdersByAdminQuery,
  getAllOrdersQuery,
  getSingleOrderByAdminQuery,
  getSingleOrderQuery,
} from "./query";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: placeOrderMutation,
      invalidatesTags: [TTagTypes.order, TTagTypes.cart],
    }),

    getAllOrder: builder.query({
      query: getAllOrdersQuery,
      providesTags: [TTagTypes.order],
    }),

    getSingleOrder: builder.query({
      query: getSingleOrderQuery,
      providesTags: [TTagTypes.order],
    }),

    getAllOrdersForAdmin: builder.query({
      query: getAllOrdersByAdminQuery,
      providesTags: [TTagTypes.order],
    }),

    getSingleOrderForAdmin: builder.query({
      query: getSingleOrderByAdminQuery,
      providesTags: [TTagTypes.order],
    }),

    changeOrderStatus: builder.mutation({
      query: changeOrderStatusMutation,
      invalidatesTags: [TTagTypes.order],
    }),

    cancelOrder: builder.mutation({
      query: cancelOrderMutation,
      invalidatesTags: [TTagTypes.order],
    }),

    deleteOrder: builder.mutation({
      query: deleteOrderMutation,
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
  useChangeOrderStatusMutation,
  useGetSingleOrderForAdminQuery,
} = orderApi;
