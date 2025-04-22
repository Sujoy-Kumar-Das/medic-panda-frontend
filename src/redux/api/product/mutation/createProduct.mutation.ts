export const createProductMutation = (data: any) => ({
  url: "/product",
  method: "POST",
  data,
});
