export const editManufactureMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => ({
  url: `/api/proxy/manufacturer/${id}`,
  method: "PATCH",
  data,
  withCredentials: true,
});
