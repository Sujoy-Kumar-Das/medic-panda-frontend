import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import { createCustomerMutation } from "./mutation";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: createCustomerMutation,
      invalidatesTags: [TTagTypes.user],
    }),
  }),
});

export const { useCreateCustomerMutation } = customerApi;
