export const editManufactureMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => ({
  url: `/manufacturer/${id}`,
  method: "PATCH",
  data,
});
