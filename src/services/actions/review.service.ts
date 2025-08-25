"use server";

export const getAllReviewService = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_base_url_local}/review/public`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return undefined;
  }
};
