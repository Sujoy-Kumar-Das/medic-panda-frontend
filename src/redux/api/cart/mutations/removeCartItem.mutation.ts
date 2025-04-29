export const removeCartItemMutation = ({
  data,
  id,
}: {
  data?: any;
  id: string;
}) => {
  return {
    url: `/cart/${id}`,
    method: "DELETE",
    data,
  };
};
