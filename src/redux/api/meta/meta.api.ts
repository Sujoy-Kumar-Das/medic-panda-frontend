import { baseApi } from "../base.api";
import { getAdminMetaQuery, getUserMetaQuery } from "./query";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserMeta: builder.query({
      query: getUserMetaQuery,
    }),
    getAdminMeta: builder.query({
      query: getAdminMetaQuery,
    }),
  }),
});

export const { useGetAdminMetaQuery, useGetUserMetaQuery } = metaApi;
