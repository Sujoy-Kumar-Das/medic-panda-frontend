import { baseApi } from "../base.api";
import {
  changePasswordMutation,
  forgotPasswordMutation,
  loginMutation,
  resetPasswordMutation,
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
      query: resetPasswordMutation,
    }),

    getAccessToken: builder.mutation({
      query: () => ({
        url: "/api/proxy/auth/refresh-token",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetAccessTokenMutation,
} = authApi;
