import { z } from "zod";

export const reviewValidationSchema = z.object({
  comment: z
    .string({ required_error: "Review cannot be empty" })
    .min(10, { message: "Review should be at least 10 characters" })
    .max(50, { message: "Review should not exceed 50 characters" }),

  rating: z
    .number({ required_error: "Rating is required" })
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating cannot be more than 5" }),
});
