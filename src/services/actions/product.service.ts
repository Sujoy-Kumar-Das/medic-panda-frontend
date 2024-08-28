"use server";
export const getAllProductService = async (limit: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_base_url_local}/product`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
