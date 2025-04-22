export const editCategoryMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  return {
    url: `/category/${id}`,
    method: "PATCH",
    data,
  };
};
