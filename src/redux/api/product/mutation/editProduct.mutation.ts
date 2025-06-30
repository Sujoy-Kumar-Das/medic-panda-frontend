export const editProductMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  return {
    url: `/api/proxy/product/${id}`,
    method: "PATCH",
    data,
    withCredentials: true,
  };
};
