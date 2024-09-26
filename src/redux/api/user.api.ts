import { baseApi } from "./base.api";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUserEmail: builder.mutation({
      query: (data) => ({
        url: "/user/email/",
        method: "PATCH",
        data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    getAllBlockedUsers: builder.query({
      query: () => ({
        url: "/users/blocked-user",
        method: "GET",
      }),
    }),
    verifyUser: builder.mutation({
      query: () => ({
        url: "/user/verify-email",
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useUpdateUserEmailMutation,
  useGetAllUsersQuery,
  useGetAllBlockedUsersQuery,
  useVerifyUserMutation,
} = userApi;
