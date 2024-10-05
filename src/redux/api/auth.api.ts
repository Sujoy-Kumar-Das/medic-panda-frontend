import { baseApi } from "./base.api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useLoginMutation, useChangePasswordMutation } = authApi;
