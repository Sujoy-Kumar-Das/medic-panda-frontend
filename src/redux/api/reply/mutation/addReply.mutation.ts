export const addReplyMutation = ({ data, id }: { data: any; id: string }) => ({
  url: `/review/reply/${id}`,
  method: "POST",
  data,
});
