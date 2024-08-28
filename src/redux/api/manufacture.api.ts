import { baseApi } from "./base.api";

const manufactureApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createManufacture: builder.mutation({
      query: (data) => ({
        url: "/manufacturer",
        method: "POST",
        body: data,
      }),
    }),
    getAllManufacture: builder.query({
      query: () => ({
        url: "/manufacturer",
        method: "GET",
      }),
    }),
    getSingleManufacture: builder.query({
      query: (id) => {
        return {
          url: `/manufacturer/${id}`,
          method: "GET",
        };
      },
    }),
    editManufacture: builder.mutation({
      query: ({ id, data }) => ({
        url: `/manufacturer/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteManufacture: builder.mutation({
      query: (id) => ({
        url: `/manufacturer/${id}`,
        method: "DELETE",
      }),
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
