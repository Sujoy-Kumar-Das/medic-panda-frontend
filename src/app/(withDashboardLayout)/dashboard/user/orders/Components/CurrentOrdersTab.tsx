import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
export default function CurrentOrdersTab() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      bgcolor="background.paper"
      p={2}
      borderRadius={1}
      spacing={2}
    >
      <Stack
        direction={{ md: "column", xs: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={2}
      >
        <Typography>Order Code</Typography>
        <Typography color={"text.secondary"}>#111111</Typography>
      </Stack>
      <Stack spacing={2} direction={{ md: "column", xs: "row" }}>
        <Typography>Placed On</Typography>
        <Typography color={"text.secondary"}>4/7/2024</Typography>
      </Stack>
      <Stack direction={{ md: "column", xs: "row" }} spacing={2}>
        <Typography>Total</Typography>
        <Typography color={"text.secondary"}>$100</Typography>
      </Stack>
      <Stack direction={{ md: "column", xs: "row" }} spacing={2}>
        <Typography>Payment</Typography>
        <Typography color={"text.secondary"} sx={{ cursor: "pointer" }}>
          Pay Now
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        component={Link}
        href={""}
        sx={{ textDecoration: "none", color: "primary.main" }}
      >
        <Typography>Order Status</Typography>
        <ArrowForwardIosOutlinedIcon />
      </Stack>
    </Stack>
  );
}
