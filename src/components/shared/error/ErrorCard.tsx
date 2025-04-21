import { IGenericErrorResponse } from "@/types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Typography } from "@mui/material";

interface ReviewErrorProps {
  error: IGenericErrorResponse;
  refetch?: () => void;
}

export default function ErrorCard({ error, refetch }: ReviewErrorProps) {
  const {
    statusCode = 404,
    message = "Something went wrong while loading reviews.",
  } = error;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      textAlign="center"
      p={4}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />

      <Typography variant="h4" color="error" gutterBottom>
        {statusCode}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {message}
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={2}>
        Please try again or contact support if the issue persists.
      </Typography>

      {refetch && (
        <Button variant="contained" color="error" onClick={refetch}>
          Retry
        </Button>
      )}
    </Box>
  );
}
