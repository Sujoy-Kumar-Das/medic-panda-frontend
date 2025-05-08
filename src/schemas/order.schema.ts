import { OrderStatus } from "@/types";
import { z } from "zod";

export const orderShippingAddressSchema = z.object({
  name: z
    .string({ required_error: "Full name is required." })
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(50, { message: "Full name must be under 50 characters." }),

  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter a valid email address." }),

  contact: z
    .string({ required_error: "Contact number is required." })
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "Contact number must be valid (10 to 15 digits).",
    }),

  quantity: z.coerce
    .number({ required_error: "Order product quantity is required." })
    .min(1, { message: "Quantity Can not be a empty." }),
  address: z.object({
    street: z
      .string({ required_error: "Street address is required." })
      .min(4, { message: "Street must be at least 4 characters long." }),

    city: z
      .string({ required_error: "City is required." })
      .min(2, { message: "City must be at least 2 characters long." }),

    postalCode: z
      .string({ required_error: "Postal code is required." })
      .min(4, { message: "Postal code must be at least 4 characters." }),

    country: z
      .string({ required_error: "Country is required." })
      .min(2, { message: "Country must be at least 2 characters long." }),
  }),
});

export const changeOrderStatusSchema = z.object({
  status: z.enum(Object.values(OrderStatus) as [string, ...string[]], {
    message: "Please Select a status value.",
  }),
});
