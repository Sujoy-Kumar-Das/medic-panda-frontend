import image from "@/assets/create-account.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CreateAccountForm from "./Components/CreateAccountForm";

export default function CreateAccountPage() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          p: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="text.primary"
        >
          Create Account
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              textAlign: "center",
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

          <CreateAccountForm />
        </Stack>
      </Box>
    </Container>
  );
}
