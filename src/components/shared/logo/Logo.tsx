import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        textDecoration: "none",
        color: "text.primary",
      }}
      component={Link}
      href={"/"}
    >
      <Typography component={"h1"} variant="h4" fontWeight={"bold"}>
        Medic
      </Typography>
      <Typography
        component={"h1"}
        variant="h4"
        fontWeight={"bold"}
        color={"primary"}
      >
        Panda
      </Typography>
    </Box>
  );
}
