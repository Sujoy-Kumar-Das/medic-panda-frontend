import { IGenericErrorResponse } from "@/types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Container, Typography } from "@mui/material";
import { keyframes, Stack } from "@mui/system";
import Link from "next/link";

// Keyframe animations
const bounceAndRotateAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  40% {
    transform: translateY(-20px) rotate(-10deg);
  }
  60% {
    transform: translateY(-10px) rotate(10deg);
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

const ErrorPage = ({
  error,
  refetch,
}: {
  error?: IGenericErrorResponse;
  refetch: () => void;
}) => {
  const statusCode = error?.statusCode || 404;
  const errorMessage = error?.message || "An unexpected error has occurred.";

  const handleReload = () => {
    refetch();
  };

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
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        p: { xs: 2, sm: 4 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/path/to/your/pattern.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.1,
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          animation: `${bounceAndRotateAnimation} 2s infinite`,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: "6rem",
            color: "error.main",
          }}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          mb: 1,
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {statusCode ? `Error ${statusCode}` : "Something went wrong."}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: "text.secondary",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {`Oops! ${errorMessage}`}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            animation: `${fadeInAnimation} 1.5s ease-in-out`,
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
          component={Link}
          href="/"
        >
          Go to Homepage
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            animation: `${fadeInAnimation} 1.5s ease-in-out`,
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
              transition: "background-color 0.2s ease-in-out",
            },
          }}
          onClick={handleReload}
        >
          Reload
        </Button>
      </Stack>
    </Container>
  );
};

export default ErrorPage;
