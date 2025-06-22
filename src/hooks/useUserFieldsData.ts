import {
  CallOutlined as CallOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
} from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";
import { z } from "zod";

export default function useUserFieldsData(user: any) {
  const userFields = [
    {
      id: crypto.randomUUID(),
      label: "Full Name",
      name: "name",
      icon: PersonOutlineOutlinedIcon,
      value: user?.name || "",
      defaultValue: { name: user?.name || "" },
      schema: z.object({
        name: z
          .string({ required_error: "Name is required." })
          .min(3, { message: "Name is required." }),
      }),
    },
    {
      id: crypto.randomUUID(),
      label: "Contact",
      name: "contact",
      icon: CallOutlinedIcon,
      value: user?.contact || "",
      defaultValue: { contact: user?.contact || "" },
      type: "tel",
      schema: z.object({
        contact: z
          .string({ required_error: "Contact number is required." })
          .regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, {
            message: "Contact number is invalid.",
          }),
      }),
    },
    {
      id: crypto.randomUUID(),
      label: "City",
      icon: ApartmentIcon,
      value: user?.address?.city || "",
      name: "address.city",
      defaultValue: { address: { city: user?.address?.city || "" } },
      schema: z.object({
        address: z.object({
          city: z
            .string({ required_error: "City is required." })
            .min(3, { message: "City is required." }),
        }),
      }),
    },
    {
      id: crypto.randomUUID(),
      label: "Street",
      icon: HomeOutlinedIcon,
      value: user?.address?.street || "",
      name: "address.street",
      defaultValue: { address: { street: user?.address?.street || "" } },
      schema: z.object({
        address: z.object({
          street: z
            .string({ required_error: "Street is required." })
            .min(3, { message: "Street is required." }),
        }),
      }),
    },
    {
      id: crypto.randomUUID(),
      label: "Postal Code",
      icon: SignpostOutlinedIcon,
      value: user?.address?.postalCode || "",
      name: "address.postalCode",
      type: "number",
      defaultValue: {
        address: { postalCode: user?.address?.postalCode || "" },
      },
      schema: z.object({
        address: z.object({
          postalCode: z.coerce.number({
            required_error: "Postal Code is required.",
          }),
        }),
      }),
    },
    {
      id: crypto.randomUUID(),
      label: "Country",
      icon: PublicIcon,
      value: user?.address?.country || "",
      name: "address.country",
      defaultValue: { address: { country: user?.address?.country || "" } },
      schema: z.object({
        address: z.object({
          country: z
            .string({ required_error: "Country is required." })
            .min(3, { message: "Country is required." }),
        }),
      }),
    },
  ];

  return { userFields };
}
