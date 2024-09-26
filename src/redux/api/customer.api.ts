import { baseApi } from "./base.api";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateCustomerInfo: builder.mutation({
      query: (data: any) => ({
        url: `/customer`,
        method: "PATCH",
        data,
      }),
    }),
  }),
});

export const { useUpdateCustomerInfoMutation } = customerApi;
