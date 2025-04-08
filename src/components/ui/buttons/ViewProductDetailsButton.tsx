import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { IconButton, SxProps, Tooltip } from "@mui/material";
import Link from "next/link";

export default function ViewProductDetailsButton({
  id,
  sx,
}: {
  id: string;
  sx?: SxProps;
}) {
  return (
    <Tooltip title="Product Details">
      <IconButton sx={{ ...sx }} component={Link} href={`/product/${id}`}>
        <RemoveRedEyeIcon />
      </IconButton>
    </Tooltip>
  );
}
