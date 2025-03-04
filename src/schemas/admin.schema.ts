import { z } from "zod";

export const addAdminValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please Provide a valid email." }),
});
