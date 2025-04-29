import resetPasswordImage from "@/assets/Reset password-bg.png";
import FormHeader from "@/components/shared/form-header/FormHeader";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import ResetPasswordForm from "./Components/ResetPasswordForm";

export default function ResetPasswordPage() {
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
            width: { xs: "100%", md: "50%" },
            textAlign: "center",
          }}
        >
          <Image
            src={resetPasswordImage}
            width={400}
            height={400}
            alt="reset password image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <FormHeader
            title="Reset Password"
            subtitle="Enter your new password below to reset your account password."
          />

          <ResetPasswordForm />
        </Box>
      </Stack>
    </Container>
  );
}
