export const editReplyMutation = ({ data, id }: { data: any; id: string }) => ({
  url: `/review/reply/${id}`,
  method: "PATCH",
  data,
});
