import { z } from "zod";

export const orderSchema = z.object({
  name: z.string({ required_error: "Name is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Email is required." }),
  street: z.string({ required_error: "Street is required." }),
  city: z.string({ required_error: "City is required." }),
  postalCode: z.string({ required_error: "Postal code is required." }),
  country: z.string({ required_error: "Country is required." }),
});
