import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const replyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReply: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/reply/${id}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [TTagTypes.review],
    }),
    getAllReply: builder.query({
      query: (id) => ({
        url: `/review/reply/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.review],
    }),
    getReplyDetails: builder.query({
      query: (id) => ({
        url: `/review/reply/details/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.review],
    }),
    editReply: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/reply/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [TTagTypes.review],
    }),
    deleteReply: builder.mutation({
      query: (id) => ({
        url: `/review/reply/${id}`,
        method: "DELETE",
      }),
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
