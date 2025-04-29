import { Box, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";

import forgotPasswordImage from "@/assets/Forgot password-bg.png";

const DynamicForgotPasswordForm = dynamic(
  () => import("./Components/ForgotPasswordForm"),
  { ssr: false }
);

export default function ForgetPasswordPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            textAlign: "center",
          }}
        >
          <Image
            src={forgotPasswordImage}
            width={400}
            height={400}
            alt="forgot password image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>

        <DynamicForgotPasswordForm />
      </Stack>
    </Container>
  );
}
