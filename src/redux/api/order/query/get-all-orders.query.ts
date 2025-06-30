export const getAllOrdersQuery = (query: any) => {
  const params = new URLSearchParams();
  if (query) {
    Object.keys(query).forEach((key) => {
      params.append(key, query[key]);
    });
  }
  return {
    url: `/api/proxy/order`,
    method: "GET",
    params,
    withCredentials: true,
  };
};
