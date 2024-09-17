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
      query: (id) => {
        return {
          url: `/order/${id}`,
          method: "GET",
        };
      },
    }),
    cancelOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteDelete: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { usePlaceOrderMutation, useGetAllOrderQuery } = orderApi;
