"use server";

import { TTagTypes } from "@/redux/tag-types";
import { cookies } from "next/headers";

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
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const queryString = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    searchTerm,
    ...(category && { category }),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/product?${queryString}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        tags: [TTagTypes.product],
        revalidate: 60,
      },
    }
  );

  const data = await res.json();
  return data;
};
