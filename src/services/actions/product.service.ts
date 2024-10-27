"use server";

export const getAllProductService = async (
  limit: number = 6,
  page: number = 1,
  searchTerm: string = "",
  category: string = ""
) => {
  const queryString = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    searchTerm,
    ...(category && { category }),
  }).toString();

  console.log({ limit, page, searchTerm, category });

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
