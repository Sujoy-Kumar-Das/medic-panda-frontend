"use client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
export default function FooterButtons() {
  return (
    <Stack direction={"row"} gap={1}>
      <Typography component={Link} href={"/"} color="text.primary">
        <FacebookOutlinedIcon />
      </Typography>
      <Typography component={Link} href={"/"} color="text.primary">
        <XIcon />
      </Typography>
      <Typography component={Link} href={"/"} color="text.primary">
        <InstagramIcon />
      </Typography>
    </Stack>
  );
}
