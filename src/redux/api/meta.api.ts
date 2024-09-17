import { baseApi } from "./base.api";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserMeta: builder.query({
      query: () => ({
        url: "/meta/user",
        method: "GET",
      }),
    }),
    getAdminMeta: builder.query({
      query: () => {
        return {
          url: "/meta/admin",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAdminMetaQuery, useGetUserMetaQuery } = metaApi;
