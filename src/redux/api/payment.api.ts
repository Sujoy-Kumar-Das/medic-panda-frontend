import { baseApi } from "./base.api";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentHistory: builder.query({
      query: () => ({
        url: "/payment",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPaymentHistoryQuery } = paymentApi;
