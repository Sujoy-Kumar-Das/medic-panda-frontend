import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import dayjs from "dayjs";
import { z } from "zod";

const discountValidationSchema = z.object({
  percentage: z.coerce
    .number({ required_error: "Discount percentage is required." })
    .min(0, { message: "Product discount percentage must be at least 0." })
    .max(100, { message: "Product discount percentage must be at most 100." }),
  startDate: z.string().refine((val) => dayjs(val).isValid(), {
    message: "Invalid start date.",
  }),
  endDate: z.string().refine((val) => dayjs(val).isValid(), {
    message: "Invalid end date.",
  }),
  startTime: z.string().refine((val) => dayjs(val, "HH:mm").isValid(), {
    message: "Invalid start time.",
  }),
  endTime: z.string().refine((val) => dayjs(val, "HH:mm").isValid(), {
    message: "Invalid end time.",
  }),
});

export const createProductValidationSchema = z.object({
  product: z.object({
    name: z
      .string({ required_error: "Product Name is required." })
      .min(3, {
        message: "Product name should be at least 3 characters long.",
      }),
    thumbnail: z
      .instanceof(File)
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "Max file size is 500KB.",
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
      }),
    category: z.string({ required_error: "Category ID is required." }),
    manufacturer: z.string({ required_error: "Manufacturer ID is required." }),
    price: z.coerce
      .number({ required_error: "Product price is required." })
      .positive({ message: "Product price must be a positive number." }),
    discount: discountValidationSchema.optional(),
  }),
  productDetail: z.object({
    description: z
      .string({ required_error: "Description is required." })
      .min(100, {
        message: "Description should be at least 100 characters long.",
      }),
    stock: z.coerce
      .number({ required_error: "Stock is required." })
      .nonnegative({ message: "Stock should be positive." }),
    images: z
      .instanceof(File)
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "Max file size is 500KB.",
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
      })
      .optional(),
  }),
});
