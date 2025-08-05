import { Box, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

export default function CommonContainer({
  children,
  sx,
  bgColor = "background.default",
}: {
  children: ReactNode;
  sx?: SxProps;
  bgColor?: string;
}) {
  return (
    <Box component="section" py={10} bgcolor={bgColor} sx={sx}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
