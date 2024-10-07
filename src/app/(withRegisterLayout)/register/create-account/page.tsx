"use client";
import image from "@/assets/create-account.png";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useLogin } from "@/hooks/useLogin";
import createAccountSchema from "@/schemas/create-account.schema";
import { createUser } from "@/services/actions/user.action";
import { imageUploader } from "@/utils/imageUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function CreateAccountPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleLogin,
    isLoading: isLoginLoading,
    errorMessage,
    isSuccess,
  } = useLogin();

  const handleCreateAccount = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const photoUrl = await imageUploader(data.photo);
      data.photo = photoUrl;
      const res = await createUser(data);

      if (res.success) {
        const userData = {
          email: data.email,
          password: data.password,
        };
        await handleLogin(userData);
      } else {
        toast.error(res.message);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setIsLoading(false);
      console.log("login page error", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account created successfully");
    } else if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [isSuccess, errorMessage]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: { xs: "100%", sm: "90%", md: "75%", lg: "60%" },
          boxShadow: 3,
          borderRadius: 3,
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
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <PandaForm
              onSubmit={handleCreateAccount}
              resolver={zodResolver(createAccountSchema)}
            >
              <Stack direction="column" spacing={3}>
                <PandaInputField
                  name="name"
                  label="Name"
                  placeholder="John Doe"
                  type="text"
                  fullWidth
                />
                <PandaInputField
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  type="email"
                  fullWidth
                />
                <PandaInputField
                  name="password"
                  label="Password"
                  placeholder="*******"
                  type="password"
                  fullWidth
                />
                <PandaFileUploader name="photo" label="Your Image" />

                <LoadingButton
                  loading={isLoading || isLoginLoading}
                  disabled={isLoading || isLoginLoading}
                  loadingIndicator="Creating..."
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: 2,
                    transition: "transform 0.3s",
                    "&:active": {
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  Create Account
                </LoadingButton>
              </Stack>
            </PandaForm>

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
      </Box>
    </Container>
  );
}
