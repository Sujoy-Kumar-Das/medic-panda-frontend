import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import {
  createReviewMutation,
  deleteReviewMutation,
  editReviewMutation,
} from "./mutation";
import { getAllReviewQuery, getReviewDetailsQuery } from "./query";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: createReviewMutation,
      invalidatesTags: [TTagTypes.review],
    }),

    getAllReview: builder.query({
      query: getAllReviewQuery,
      providesTags: [TTagTypes.review],
    }),

    getReviewDetails: builder.query({
      query: getReviewDetailsQuery,
      providesTags: [TTagTypes.review],
    }),

    editReview: builder.mutation({
      query: editReviewMutation,
      invalidatesTags: [TTagTypes.review],
    }),
    deleteReview: builder.mutation({
      query: deleteReviewMutation,
      invalidatesTags: [TTagTypes.review],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewQuery,
  useGetReviewDetailsQuery,
  useEditReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
