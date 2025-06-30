export const addReplyMutation = ({ data, id }: { data: any; id: string }) => ({
  url: `/api/proxy/review/reply/${id}`,
  method: "POST",
  data,
  withCredentials: true,
});
