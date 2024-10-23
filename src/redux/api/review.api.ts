import { baseApi } from "./base.api";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = reviewApi;
