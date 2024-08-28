"use server";

export const getAllCategoriesService = async (limit: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_base_url_local}/category`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
