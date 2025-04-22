export const editProductMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  return {
    url: `/product/${id}`,
    method: "PATCH",
    data,
  };
};
