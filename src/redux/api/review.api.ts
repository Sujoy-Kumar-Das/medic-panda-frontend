import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        data,
      }),
      invalidatesTags: [TTagTypes.review],
    }),
    addReply: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/${id}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [TTagTypes.review],
    }),
    getAllReview: builder.query({
      query: (id) => ({
        url: `/review/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.review],
    }),
    getReviewDetails: builder.query({
      query: (id) => ({
        url: `/review-details/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.review],
    }),
    editReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [TTagTypes.review],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/review/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TTagTypes.review],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useAddReplyMutation,
  useGetAllReviewQuery,
  useGetReviewDetailsQuery,
  useEditReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
