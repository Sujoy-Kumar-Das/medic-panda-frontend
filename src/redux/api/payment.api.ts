import { baseApi } from "./base.api";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentHistory: builder.query({
      query: () => ({
        url: "/payment",
        method: "GET",
      }),
    }),
    paymentNow: builder.mutation({
      query: (id) => ({
        url: `/pay-now/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetPaymentHistoryQuery, usePaymentNowMutation } = paymentApi;
