"use server";

interface IQueryParams {
  limit?: number;
  page?: number;
  searchTerm?: string;
  category?: string;
}

export const getAllProductService = async ({
  limit = 6,
  page = 1,
  searchTerm = "",
  category = "",
}: IQueryParams) => {
  const queryString = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    searchTerm,
    ...(category && { category }),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/product?${queryString}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
};

export const getProductDetailsService = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/product/${id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
};
