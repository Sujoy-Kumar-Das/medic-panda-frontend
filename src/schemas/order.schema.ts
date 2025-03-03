import { OrderStatus } from "@/types";
import { z } from "zod";

export const orderShippingAddressSchema = z.object({
  street: z.string({ required_error: "Street is required." }),
  city: z.string({ required_error: "City is required." }),
  postalCode: z.string({ required_error: "Postal code is required." }),
  country: z.string({ required_error: "Country is required." }),
  contact: z.string({ required_error: "Contact number is required." }),
});

export const changeOrderStatusSchema = z.object({
  status: z.enum(Object.values(OrderStatus) as [string, ...string[]]),
});
