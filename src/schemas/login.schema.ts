import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter a valid email." }),
  password: z
    .string({ required_error: "Password is required." })
    .min(1, { message: "Please enter your password." }),
});

export default loginSchema;
