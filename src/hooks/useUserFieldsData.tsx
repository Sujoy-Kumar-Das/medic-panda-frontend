import {
  CallOutlined as CallOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
} from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";

export default function useUserFieldsData(user: any) {
  const userFields = [
    {
      label: "Full Name",
      name: "name",
      icon: PersonOutlineOutlinedIcon,
      value: user?.name,
    },
    {
      label: "Contact",
      name: "contact",
      icon: CallOutlinedIcon,
      value: user?.contact,
    },
    {
      label: "City",
      icon: ApartmentIcon,
      value: user?.address?.city,
      name: "address.city",
    },
    {
      label: "Street",
      icon: HomeOutlinedIcon,
      value: user?.address?.street,
      name: "address.street",
    },
    {
      label: "Postal Code",
      icon: SignpostOutlinedIcon,
      value: user?.address?.postalCode,
      name: "address.postalCode",
    },
    {
      label: "Country",
      icon: PublicIcon,
      value: user?.address?.country,
      name: "address.country",
    },
  ];
  return { userFields };
}
