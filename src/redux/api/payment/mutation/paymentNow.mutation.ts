export const paymentNowMutation = (id: string) => ({
  url: `/pay-now/${id}`,
  method: "POST",
});
