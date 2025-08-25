import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import { z } from "zod";

const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeOnlyRegex = /^([0-1]\d|2[0-3]):[0-5]\d$/;

export const discountValidationSchema = z.object({
  percentage: z
    .number({ required_error: "Product discount percentage is required." })
    .min(0, { message: "Product discount percentage must be at least 0." })
    .max(100, { message: "Product discount percentage must be at most 100." }),

  startDate: z
    .string({ required_error: "Discount start date is required." })
    .regex(dateOnlyRegex, {
      message: "Start date must be in YYYY-MM-DD format.",
    }),

  endDate: z
    .string({ required_error: "Discount end date is required." })
    .regex(dateOnlyRegex, {
      message: "End date must be in YYYY-MM-DD format.",
    }),

  startTime: z
    .string({ required_error: "Discount start time is required." })
    .regex(timeOnlyRegex, { message: "Start time must be in HH:mm format." }),

  endTime: z
    .string({ required_error: "Discount end time is required." })
    .regex(timeOnlyRegex, { message: "End time must be in HH:mm format." }),
});

export const createProductValidationSchema = z.object({
  product: z.object({
    name: z.string({ required_error: "Product name is required." }).min(3, {
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
    category: z.string({ required_error: "Category id is required." }),
    manufacturer: z.string({ required_error: "Manufacture id is required." }),
    price: z.coerce
      .number({ required_error: "Product price is required." })
      .positive({ message: "Product price must be a positive number." }),
    discount: discountValidationSchema.optional(),
  }),
  productDetail: z.object({
    shortDescription: z
      .string({ required_error: "Description is required." })
      .min(100, {
        message: "Description should be minimum 100 characters long.",
      })
      .max(200, {
        message: "Description should not be minimum 200 characters long.",
      }),
    detailedDescription: z
      .string({ required_error: "Description is required." })
      .min(500, {
        message: "Description should be minimum 100 characters long.",
      }),
    stock: z.coerce
      .number({ required_error: "Stock is required." })
      .nonnegative({ message: "Stock should be positive." }),
  }),
});

export const updateProductValidationSchema = z.object({
  product: z.object({
    name: z.string({ required_error: "Product Name is required." }).min(3, {
      message: "Product name should be at least 3 characters long.",
    }),
    category: z.string({ required_error: "Category ID is required." }),
    manufacturer: z.string({ required_error: "Manufacturer ID is required." }),
    price: z.coerce
      .number({ required_error: "Product price is required." })
      .positive({ message: "Product price must be a positive number." }),
    discount: discountValidationSchema.optional(),
  }),
  productDetail: z.object({
    shortDescription: z
      .string({ required_error: "Description is required." })
      .min(100, {
        message: "Description should be minimum 100 characters long.",
      })
      .max(200, {
        message: "Description should not be minimum 200 characters long.",
      }),
    detailedDescription: z
      .string({ required_error: "Description is required." })
      .min(500, {
        message: "Description should be minimum 100 characters long.",
      }),
    stock: z.coerce
      .number({ required_error: "Stock is required." })
      .nonnegative({ message: "Stock should be positive." }),
  }),
});
