export const resetPasswordMutation = ({
  data,
  token,
}: {
  data: any;
  token: string;
}) => ({
  url: "/auth/reset-password",
  method: "POST",
  data,
  headers: {
    Authorization: token,
  },
});
