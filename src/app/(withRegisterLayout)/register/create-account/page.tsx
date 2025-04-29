import image from "@/assets/create-account.png";
import FormHeader from "@/components/shared/form-header/FormHeader";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CreateAccountForm from "./Components/CreateAccountForm";

export default function CreateAccountPage() {
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
          }}
        >
          <Image
            src={image}
            width={400}
            height={400}
            alt="Create Account Image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>

        {/* Form Section */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <FormHeader
            title="Create Account"
            subtitle="Sign up to get started."
          />

          <CreateAccountForm />

          <Typography component="p" textAlign="center" mt={3}>
            Already have an account?{" "}
            <Typography
              component={Link}
              href="/register/login"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Login Now
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
