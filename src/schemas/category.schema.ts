import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string({ required_error: "Category name is required." }),
  description: z
    .string({
      required_error: "Category description is required.",
    })
    .min(100, { message: "Description must be minimum 100 character" }),
  thumbnail: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max file size is 500KB.",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
    }),
});