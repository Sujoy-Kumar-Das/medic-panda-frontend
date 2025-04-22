export const createManufactureMutation = (data: any) => {
  return {
    url: "/manufacturer",
    method: "POST",
    data,
  };
};
