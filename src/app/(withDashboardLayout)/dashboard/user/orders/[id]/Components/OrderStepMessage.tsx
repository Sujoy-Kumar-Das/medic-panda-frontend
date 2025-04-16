import { Box, Typography } from "@mui/material";

interface OrderStepMessageProps {
  message: string;
  color: string;
}

export default function OrderStepMessage({
  message,
  color,
}: OrderStepMessageProps) {
  return (
    <Box sx={{ marginTop: "24px", marginBottom: "16px" }}>
      <Typography variant="h6" style={{ color }}>
        {message}
      </Typography>
    </Box>
  );
}
