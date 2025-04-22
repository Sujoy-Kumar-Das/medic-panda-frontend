import { baseApi } from "../base.api";
import { paymentNowMutation } from "./mutation";
import { getPaymentHistoryQuery } from "./query";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentHistory: builder.query({
      query: getPaymentHistoryQuery,
    }),
    paymentNow: builder.mutation({
      query: paymentNowMutation,
    }),
  }),
});

export const { useGetPaymentHistoryQuery, usePaymentNowMutation } = paymentApi;
