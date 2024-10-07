import { Button } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicAddToCartButton = dynamic(
  () => import("@/components/ui/buttons/AddToCartButton"),
  {
    loading: () => <Button disabled>Add To Cart</Button>,
  }
);

export default DynamicAddToCartButton;
