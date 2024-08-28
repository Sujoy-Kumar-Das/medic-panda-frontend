import { baseApi } from "./base.api";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useGetAllUsersQuery, useGetAllBlockedUsersQuery } = userApi;
