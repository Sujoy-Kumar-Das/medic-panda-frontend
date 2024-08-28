import { baseApi } from "./base.api";

const myProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/user/get-me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = myProfileApi;
