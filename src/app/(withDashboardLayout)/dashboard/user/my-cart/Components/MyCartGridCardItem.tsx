import { Grid, SxProps, Typography } from "@mui/material";

interface MyCartGridCardItemProps {
  xsColum?: number;
  mdColum?: number;
  title: string;
  value: string;
  sxProps?: SxProps;
}

export default function MyCartGridCardItem({
  xsColum = 12,
  mdColum = 3,
  title,
  value,
  sxProps,
}: MyCartGridCardItemProps) {
  return (
    <Grid item xs={xsColum} md={mdColum}>
      <Typography fontWeight={600} fontSize="1rem" color="text.primary">
        {title}
      </Typography>
      <Typography fontSize="0.9rem" color="text.secondary" sx={{ ...sxProps }}>
        {value}
      </Typography>
    </Grid>
  );
}
