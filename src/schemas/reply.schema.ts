import { z } from "zod";

export const replyValidationSchema = z.object({
  comment: z
    .string({
      required_error: "Reply is required.",
      invalid_type_error: "Reply must be string.",
    })
    .min(3, { message: "Reply is required." }),
});
