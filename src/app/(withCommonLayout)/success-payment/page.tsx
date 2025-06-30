"use client";
import getNewAccessToken from "@/utils/get-access-token";
import { logoutUserFunc } from "@/utils/logoutUser";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Container, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const bounceAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function PaymentSuccessPage() {
  const router = useRouter();

  const handleGetAccessToken = async () => {
    const res = await getNewAccessToken();

    if (!res.ok) {
      toast.error("Your session is expired please login.");
      await logoutUserFunc(router, "/register/login");
      return;
    }

    router.push("/dashboard/user/orders");
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", my: 10 }}>
      <CheckCircleIcon
        sx={{
          fontSize: 100,
          color: "success.main",
          animation: `${bounceAnimation} 1.5s ease-in-out infinite`,
        }}
      />
      <Typography
        variant="h3"
        fontWeight="bold"
        color="success.main"
        sx={{ mt: 3 }}
      >
        Payment Successful!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4 }}>
        Your order has been successfully placed, and your payment has been
        processed.
      </Typography>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            fontSize: "1rem",
          }}
          // component={Link}
          // href="/dashboard/user/orders"
          onClick={handleGetAccessToken}
        >
          View My Orders
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            fontSize: "1rem",
          }}
          component={Link}
          href="/"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
