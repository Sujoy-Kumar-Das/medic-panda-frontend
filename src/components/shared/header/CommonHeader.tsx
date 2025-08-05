import { Box, Typography } from "@mui/material";

interface CommonHeaderProps {
  title: string;
  subtitle: string;
}

export default function CommonHeader({ title, subtitle }: CommonHeaderProps) {
  return (
    <Box textAlign="center" mb={8}>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="text.primary"
        sx={{
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          maxWidth: "640px",
          mx: "auto",
          fontWeight: "normal",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
