/* eslint-disable react/no-unescaped-entities */
"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

export default function LoginPage() {
  const handleLogin = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.default",
          p: 5,
          boxShadow: 1,
          width: { xs: "90%", md: "50%" },
          borderRadius: 2,
        }}
      >
        <Typography component={"h1"} variant="h4" textAlign={"center"} mb={5}>
          Login
        </Typography>
        <PandaForm onSubmit={handleLogin}>
          <Stack direction={"column"} spacing={2}>
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
            <Typography component={"p"} textAlign={"right"}>
              Forgot password ?{" "}
              <Typography
                component={Link}
                href={"/"}
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Reset Now
              </Typography>
            </Typography>
            <Button fullWidth type="submit">
              Login
            </Button>
          </Stack>
        </PandaForm>
        <Typography component={"p"} textAlign={"center"} mt={3}>
          Don't have account ?{" "}
          <Typography
            component={Link}
            href={"/register/create-account"}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Create Now
          </Typography>
        </Typography>{" "}
      </Box>
    </Container>
  );
}
