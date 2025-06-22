"use server";

export const getAllManufactureService = async (limit: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_base_url_local}/manufacturer`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return undefined;
  }
};
