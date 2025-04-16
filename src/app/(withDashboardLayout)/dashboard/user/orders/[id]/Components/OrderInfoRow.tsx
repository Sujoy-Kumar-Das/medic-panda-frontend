import { Box, SxProps, Typography, TypographyProps } from "@mui/material";

interface OrderInfoRowProps {
  label: string;
  value: React.ReactNode;
  labelProps?: TypographyProps;
  valueProps?: TypographyProps;
  labelSx?: SxProps;
  valueSx?: SxProps;
}

export const OrderInfoRow = ({
  label,
  value,
  labelProps = {},
  valueProps = {},
  labelSx,
  valueSx,
}: OrderInfoRowProps) => (
  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography
      variant="body1"
      color="text.secondary"
      {...labelProps}
      sx={{ ...labelSx }}
    >
      {label}
    </Typography>
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="right"
      {...valueProps}
      sx={{ ...valueSx }}
    >
      {value || "N/A"}
    </Typography>
  </Box>
);
