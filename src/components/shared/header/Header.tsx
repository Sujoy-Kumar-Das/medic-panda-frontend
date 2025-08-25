import { Box, Paper, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

const Header = ({
  title,
  subtitle,
  children,
  sx,
}: {
  title: string;
  subtitle: string;
  children?: ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Paper
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3 },
        backgroundColor: "primary.light",
        borderRadius: 2,
        color: "common.white",
        boxShadow: 4,
        mb: { xs: 2, sm: 3 },
        mt: { xs: 1, sm: 2 },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "flex-end" }}
        spacing={{ xs: 1.5, sm: 2 }}
        sx={sx}
      >
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "36px",
              },
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {children && <Box>{children}</Box>}
      </Stack>
    </Paper>
  );
};

export default Header;
