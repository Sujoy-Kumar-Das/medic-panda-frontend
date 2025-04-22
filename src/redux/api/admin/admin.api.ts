import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import {
  blockUserMutation,
  createAdminMutation,
  deleteUserMutation,
  unblockUserMutation,
} from "./mutation";
import { getAllUsersQuery, getSingleUserQuery } from "./query";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: createAdminMutation,
      invalidatesTags: [TTagTypes.user],
    }),
    getAllUsers: builder.query({
      query: getAllUsersQuery,
      providesTags: [TTagTypes.user],
    }),
    getSingleUser: builder.query({
      query: getSingleUserQuery,
      providesTags: [TTagTypes.user],
    }),
    blockUser: builder.mutation({
      query: blockUserMutation,
      invalidatesTags: [TTagTypes.user],
    }),
    UnblockUser: builder.mutation({
      query: unblockUserMutation,
      invalidatesTags: [TTagTypes.user],
    }),
    deleteUser: builder.mutation({
      query: deleteUserMutation,
      invalidatesTags: [TTagTypes.user],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useBlockUserMutation,
  useUnblockUserMutation,
  useDeleteUserMutation,
} = adminApi;
