"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  const router = useRouter();
  const handleConfirmVerify = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/user/confirm-verification-email",
        {
          method: "PATCH",
          headers: {
            Authorization: searchParams.token,
          },
        }
      );

      const data = await res.json();
      console.log(data);
      if (!data.success) {
        toast.error(data.message);
      }

      toast.success(data.message);
      router.push("/dashboard/user/security");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Container
      sx={{
        py: 4,
        textAlign: "center",
        width: { md: "50%", xs: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <Typography variant="h4" color="text.primary" gutterBottom>
          Verify Your Email
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: 80, color: "primary.main" }}
          />
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            Thank you for signing up! Please verify your email to activate your
            account.
          </Typography>
        </Box>

        <Stack spacing={2}>
          <Button
            onClick={handleConfirmVerify}
            color="primary"
            sx={{
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Verify
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
