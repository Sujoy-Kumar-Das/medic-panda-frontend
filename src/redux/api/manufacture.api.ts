import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const manufactureApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createManufacture: builder.mutation({
      query: (data) => {
        return {
          url: "/manufacturer",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [TTagTypes.manufacture],
    }),
    getAllManufacture: builder.query({
      query: (params) => ({
        url: "/manufacturer",
        method: "GET",
        params,
      }),
      providesTags: [TTagTypes.manufacture],
    }),
    getSingleManufacture: builder.query({
      query: (id) => {
        return {
          url: `/manufacturer/${id}`,
          method: "GET",
        };
      },
      providesTags: [TTagTypes.manufacture],
    }),
    editManufacture: builder.mutation({
      query: ({ id, data }) => ({
        url: `/manufacturer/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [TTagTypes.manufacture],
    }),
    deleteManufacture: builder.mutation({
      query: (id) => ({
        url: `/manufacturer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TTagTypes.manufacture],
    }),
  }),
});

export const {
  useCreateManufactureMutation,
  useGetAllManufactureQuery,
  useGetSingleManufactureQuery,
  useEditManufactureMutation,
  useDeleteManufactureMutation,
} = manufactureApi;
