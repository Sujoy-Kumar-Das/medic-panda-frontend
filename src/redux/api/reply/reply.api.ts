import { TTagTypes } from "../../tag-types";
import { baseApi } from "../base.api";
import {
  addReplyMutation,
  deleteReplyMutation,
  editReplyMutation,
} from "./mutation";
import { getAllReplyQuery, getReplyDetailsQuery } from "./query";

const replyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReply: builder.mutation({
      query: addReplyMutation,
      invalidatesTags: [TTagTypes.review],
    }),

    getAllReply: builder.query({
      query: getAllReplyQuery,
      providesTags: [TTagTypes.review],
    }),

    getReplyDetails: builder.query({
      query: getReplyDetailsQuery,
      providesTags: [TTagTypes.review],
    }),

    editReply: builder.mutation({
      query: editReplyMutation,
      invalidatesTags: [TTagTypes.review],
    }),

    deleteReply: builder.mutation({
      query: deleteReplyMutation,
      invalidatesTags: [TTagTypes.review],
    }),
  }),
});

export const {
  useAddReplyMutation,
  useDeleteReplyMutation,
  useGetReplyDetailsQuery,
  useEditReplyMutation,
  useGetAllReplyQuery,
} = replyApi;
