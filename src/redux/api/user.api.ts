import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => {
        return {
          url: "/user/admin",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [TTagTypes.user],
    }),
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user/customer",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [TTagTypes.user],
    }),
    updateUserEmail: builder.mutation({
      query: (data) => ({
        url: "/user/email/",
        method: "PATCH",
        data,
      }),
      invalidatesTags: [TTagTypes.user],
    }),
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/user",
        method: "GET",
        params,
      }),
      providesTags: [TTagTypes.user],
    }),
    getAllBlockedUsers: builder.query({
      query: () => ({
        url: "/users/blocked-user",
        method: "GET",
      }),
    }),
    getSingleUser: builder.query({
      query: ({ id }) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.user],
    }),
    verifyUser: builder.mutation({
      query: () => ({
        url: "/user/verify-email",
        method: "PATCH",
      }),
      invalidatesTags: [TTagTypes.user],
    }),
    confirmUserOTP: builder.mutation({
      query: (data: { otp: number }) => ({
        url: "/user/confirm-verification-email",
        method: "PATCH",
        data,
      }),
      invalidatesTags: [TTagTypes.user],
    }),
    blockUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user/block-user",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [TTagTypes.user],
    }),
    UnblockUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user/unblock-user",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [TTagTypes.user],
    }),
    deleteUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user",
          method: "DELETE",
          data,
        };
      },
      invalidatesTags: [TTagTypes.user],
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: `/user`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [TTagTypes.user],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useCreateUserMutation,
  useUpdateUserEmailMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useGetAllBlockedUsersQuery,
  useVerifyUserMutation,
  useConfirmUserOTPMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
  useDeleteUserMutation,
  useUpdateUserInfoMutation,
} = userApi;
