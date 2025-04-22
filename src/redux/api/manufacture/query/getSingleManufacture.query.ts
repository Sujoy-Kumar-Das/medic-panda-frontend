export const getSingleManufactureQuery = (id: string) => {
  return {
    url: `/manufacturer/${id}`,
    method: "GET",
  };
};
