export const confirmEmailVerificationOTP = (data: { otp: number }) => ({
  url: "/api/proxy/user/confirm-verification-email",
  method: "PATCH",
  data,
  withCredentials: true,
});
