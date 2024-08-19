"use client";

import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { imageUploader } from "@/services/actions/imageUploader";
import { createUser } from "@/services/actions/user.action";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function CreateAccountPage() {
  const [errors, setErrors] = useState("");

  const handleLogin = async (data: FieldValues) => {
    setErrors("");
    const photoUrl = await imageUploader(data.photo);
    data.photo = photoUrl;

    const res = await createUser(data);
    if (res.success) {
      toast.success(res.message);
    } else {
      setErrors(res.message);
    }
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
          Create Account
        </Typography>

        {errors && (
          <Box sx={{ bgcolor: "red", p: 0.5, borderRadius: "8px", mb: 3 }}>
            <Typography
              component={"h6"}
              color={"text.disabled"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              {errors}
            </Typography>
          </Box>
        )}

        <PandaForm onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <PandaInputField
                name="name"
                label="Name"
                placeholder="John Doe"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PandaInputField
                name="email"
                label="Email"
                placeholder="example@gmail.com"
                type="email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PandaInputField
                name="password"
                label="Password"
                placeholder="*******"
                type="password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PandaFileUploader name="photo" label="Your Image" />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit" variant="contained">
                Create Account
              </Button>
            </Grid>
          </Grid>
        </PandaForm>
        <Typography component={"p"} textAlign={"center"} mt={3}>
          Already have an account?{" "}
          <Box
            component={Link}
            href={"/register/login"}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Login Now
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}
