import { z } from "zod";

export const orderShippingAddressSchema = z.object({
  street: z.string({ required_error: "Street is required." }),
  city: z.string({ required_error: "City is required." }),
  postalCode: z.string({ required_error: "Postal code is required." }),
  country: z.string({ required_error: "Country is required." }),
});
