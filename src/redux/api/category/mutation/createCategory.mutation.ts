export const createCategoryMutation = (data: any) => ({
  url: "/api/proxy/category",
  method: "POST",
  data,
  withCredentials: true,
});
