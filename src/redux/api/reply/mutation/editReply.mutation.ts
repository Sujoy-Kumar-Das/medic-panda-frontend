export const editReplyMutation = ({ data, id }: { data: any; id: string }) => ({
  url: `/api/proxy/review/reply/${id}`,
  method: "PATCH",
  data,
  withCredentials: true,
});
