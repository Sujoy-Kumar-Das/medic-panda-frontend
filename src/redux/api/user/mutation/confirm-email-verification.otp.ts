export const confirmEmailVerificationOTP = (data: { otp: number }) => ({
  url: "/user/confirm-verification-email",
  method: "PATCH",
  data,
});
