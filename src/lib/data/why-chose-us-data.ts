import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const whyChooseData = [
  {
    id: 1,
    title: "Certified Products",
    description:
      "All our medicines are sourced from licensed manufacturers and pharmacies.",
    icon: VerifiedUserIcon,
    color: "primary.main",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Get your medicines delivered within 24–48 hours with our express service.",
    icon: LocalShippingIcon,
    color: "secondary.main",
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "100% secure payment options with SSL encryption for your safety.",
    icon: LockIcon,
    color: "accent.main",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our pharmacists are available round the clock to assist you.",
    icon: SupportAgentIcon,
    color: "accent.light",
  },
];
