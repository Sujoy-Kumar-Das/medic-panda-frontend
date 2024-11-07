import { Stack, Typography } from "@mui/material";

function OrderInfo({ label, value }: { label: string; value: string }) {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      alignItems="center"
      spacing={1}
    >
      <Typography variant="body2" fontWeight={600} textAlign="center">
        {label}
      </Typography>
      <Typography color="text.secondary" variant="body2" textAlign="center">
        {value}
      </Typography>
    </Stack>
  );
}

export default OrderInfo;
