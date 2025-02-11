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
        padding: 3,
        background: "linear-gradient(135deg, #007bff, #00c8ff)",
        borderRadius: 2,
        color: "#ffffff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        marginBottom: 3,
        marginTop: 2,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          ...sx,
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>

        {children && children}
      </Stack>
    </Paper>
  );
};

export default Header;
