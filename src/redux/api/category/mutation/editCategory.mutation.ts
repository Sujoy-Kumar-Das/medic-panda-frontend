export const editCategoryMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  return {
    url: `/api/proxy/category/${id}`,
    method: "PATCH",
    data,
    withCredentials: true,
  };
};
