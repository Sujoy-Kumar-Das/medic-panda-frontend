import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const myProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/user/get-me",
        method: "GET",
      }),
      providesTags: [TTagTypes.user],
    }),
  }),
});

export const { useGetMeQuery } = myProfileApi;
