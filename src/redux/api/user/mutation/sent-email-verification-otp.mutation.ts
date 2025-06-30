export const sentEmailVerificationOTP = () => ({
  url: "/api/proxy/user/verify-email",
  method: "PATCH",
  withCredentials: true,
});
