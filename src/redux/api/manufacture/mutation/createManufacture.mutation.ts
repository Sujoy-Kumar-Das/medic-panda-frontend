export const createManufactureMutation = (data: any) => {
  return {
    url: "/api/proxy/manufacturer",
    method: "POST",
    data,
    withCredentials: true,
  };
};
