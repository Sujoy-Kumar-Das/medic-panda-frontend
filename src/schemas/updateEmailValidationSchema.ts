import { z } from "zod";

const updateEmailValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please provide a valid email." }),
});

export default updateEmailValidationSchema;
