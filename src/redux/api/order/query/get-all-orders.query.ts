export const getAllOrdersQuery = (query: any) => {
  const params = new URLSearchParams();
  if (query) {
    Object.keys(query).forEach((key) => {
      params.append(key, query[key]);
    });
  }
  return {
    url: `/order`,
    method: "GET",
    params,
  };
};
