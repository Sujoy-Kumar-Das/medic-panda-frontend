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
      label: "Full Name",
      name: "name",
      icon: PersonOutlineOutlinedIcon,
      value: user?.name,
      schema: z.object({
        name: z
          .string({ required_error: "Name is required." })
          .min(3, { message: "Name is required." }),
      }),
    },
    {
      label: "Contact",
      name: "contact",
      icon: CallOutlinedIcon,
      value: user?.contact,
      type: "number",
      schema: z.object({
        contact: z.coerce
          .number({ required_error: "Contact is required." })
          .min(3, { message: "Contact is required." }),
      }),
    },
    {
      label: "City",
      icon: ApartmentIcon,
      value: user?.address?.city,
      name: "address.city",
      schema: z.object({
        address: z.object({
          city: z
            .string({ required_error: "City is required." })
            .min(3, { message: "City is required." }),
        }),
      }),
    },
    {
      label: "Street",
      icon: HomeOutlinedIcon,
      value: user?.address?.street,
      name: "address.street",
      schema: z.object({
        address: z.object({
          street: z
            .string({ required_error: "Street is required." })
            .min(3, { message: "Street is required." }),
        }),
      }),
    },
    {
      label: "Postal Code",
      icon: SignpostOutlinedIcon,
      value: user?.address?.postalCode,
      name: "address.postalCode",
      type: "number",
      schema: z.object({
        address: z.object({
          postalCode: z.coerce.number({
            required_error: "Postal Code is required.",
          }),
        }),
      }),
    },
    {
      label: "Country",
      icon: PublicIcon,
      value: user?.address?.country,
      name: "address.country",
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
