"use server";

export const getAllCategoriesService = async (
  limit?: number,
  popularity?: boolean
) => {
  const params: Record<string, string> = {};

  if (limit) params.limit = limit.toString();
  if (popularity !== undefined) params.popularity = popularity.toString();

  const queryString = new URLSearchParams(params).toString();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_base_url_local}/category?${queryString}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
