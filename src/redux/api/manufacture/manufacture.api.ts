import { TTagTypes } from "../../tag-types";
import { baseApi } from "../base.api";
import {
  createManufactureMutation,
  deleteManufactureMutation,
  editManufactureMutation,
} from "./mutation";
import { getAllManufactureQuery, getSingleManufactureQuery } from "./query";

const manufactureApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createManufacture: builder.mutation({
      query: createManufactureMutation,
      invalidatesTags: [TTagTypes.manufacture],
    }),

    getAllManufacture: builder.query({
      query: getAllManufactureQuery,
      providesTags: [TTagTypes.manufacture],
    }),

    getSingleManufacture: builder.query({
      query: getSingleManufactureQuery,
      providesTags: [TTagTypes.manufacture],
    }),

    editManufacture: builder.mutation({
      query: editManufactureMutation,
      invalidatesTags: [TTagTypes.manufacture],
    }),

    deleteManufacture: builder.mutation({
      query: deleteManufactureMutation,
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
