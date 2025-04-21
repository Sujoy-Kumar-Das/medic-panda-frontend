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
    deleteReply: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/reply/${id}`,
        method: "DELETE",
        data,
      }),
      invalidatesTags: [TTagTypes.review],
    }),
  }),
});

export const {
  useAddReplyMutation,
  useDeleteReplyMutation,
  useGetAllReplyQuery,
} = replyApi;
