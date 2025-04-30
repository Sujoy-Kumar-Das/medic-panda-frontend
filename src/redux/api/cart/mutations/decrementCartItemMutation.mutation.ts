export const decrementCartItemMutation = ({
  data,
  id,
}: {
  data?: any;
  id: string;
}) => {
  return {
    url: `/cart/decrement/${id}`,
    method: "PATCH",
    data,
  };
};
