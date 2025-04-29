import resetPasswordImage from "@/assets/Reset password-bg.png";
import { Box, Container, Stack, Typography } from "@mui/material";
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
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            Reset Password
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            Enter your new password below to reset your account password.
          </Typography>

          <ResetPasswordForm />
        </Box>
      </Stack>
    </Container>
  );
}
