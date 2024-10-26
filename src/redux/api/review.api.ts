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
    getAllReview: builder.query({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
      providesTags: [TTagTypes.review],
    }),
  }),
});

export const { useCreateReviewMutation, useGetAllReviewQuery } = reviewApi;
