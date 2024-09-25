import z from "zod";
const updatePasswordValidationSchema = z.object({
  oldPassword: z
    .string({ required_error: "Old Password is required." })
    .min(2, { message: "Old password is required." }),
  newPassword: z
    .string({ required_error: "Password is required." })
    .min(8, { message: "Password should be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character.",
    })
    .max(32, {
      message: "Password should not be longer than 32 characters.",
    }),
});

export default updatePasswordValidationSchema;
