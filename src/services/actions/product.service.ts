"use server";

export const getAllProductService = async (
  limit: number = 6,
  page: number = 1,
  searchTerm: string = ""
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/product?limit=${limit}&page=${page}&searchTerm=${searchTerm}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
