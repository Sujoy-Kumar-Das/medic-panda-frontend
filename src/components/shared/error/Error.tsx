import { IGenericErrorResponse } from "@/types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Container, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import Link from "next/link";

// Keyframe animations
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ErrorPage = ({ error }: { error?: IGenericErrorResponse }) => {
  const statusCode = error?.statusCode || 404;
  const errorMessage = error?.message || "An unexpected error has occurred.";

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        animation: `${fadeInAnimation} 1s ease-in-out`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          animation: `${bounceAnimation} 2s infinite`,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: "6rem",
            color: "primary.main",
          }}
        />
      </Box>

      <Typography variant="h4" sx={{ mb: 1 }}>
        {statusCode ? `Error ${statusCode}` : " Something went wrong."}
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        {`Oops!${errorMessage}`}
      </Typography>

      <Link href="/" passHref>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            animation: `${fadeInAnimation} 1.5s ease-in-out`,
          }}
        >
          Go to Homepage
        </Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
