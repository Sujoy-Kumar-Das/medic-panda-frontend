import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string({ required_error: "Product name is required." })
    .min(1, { message: "Product name is required" }),
  description: z
    .string({ required_error: "Product description is required." })
    .min(100, {
      message: "Product description must be at least 100 characters",
    }),
  price: z.preprocess(
    (value) => parseFloat(value as string),
    z
      .number({ required_error: "Price is required." })
      .min(0, { message: "Price must be a positive value" })
      .max(99999999.99, { message: "Price exceeds the maximum value" })
  ),
  category: z.string({ required_error: "Category is required." }),
  manufacture: z
    .string({ required_error: "Brand name is required." })
    .min(1, { message: "Brand name is required" }),
  stock: z.preprocess(
    (value) => parseInt(value as string, 10),
    z
      .number({ required_error: "Stock is required." })
      .min(0, { message: "Stock quantity must be a non-negative integer" })
  ),
  percentage: z.preprocess(
    (value) => parseFloat(value as string),
    z
      .number()
      .min(0, { message: "Discount must be a positive value" })
      .max(100, { message: "Discount cannot exceed 100%" })
      .optional()
  ),
  thumbnail: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max file size is 500KB.",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
    }),
  startDate: z.any(),
  endDate: z.any(),
  startTime: z.any(),
  endTime: z.any(),
});
