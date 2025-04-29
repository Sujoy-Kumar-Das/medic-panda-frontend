import { baseApi } from "../base.api";
import {
  changePasswordMutation,
  forgotPasswordMutation,
  loginMutation,
} from "./mutations";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: loginMutation,
    }),
    changePassword: builder.mutation({
      query: changePasswordMutation,
    }),
    forgotPassword: builder.mutation({
      query: forgotPasswordMutation,
    }),

    resetPassword: builder.mutation({
      query: ({ data, token }) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
