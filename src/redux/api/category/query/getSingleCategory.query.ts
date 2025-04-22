export const getSingleCategoryQuery = (id: string) => {
  return {
    url: `/category/${id}`,
    method: "GET",
  };
};
