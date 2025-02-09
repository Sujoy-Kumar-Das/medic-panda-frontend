import { Paper, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const Header = ({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
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
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h6">{subtitle}</Typography>
        {action && action}
      </Stack>
    </Paper>
  );
};

export default Header;
