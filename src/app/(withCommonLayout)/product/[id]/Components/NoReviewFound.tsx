"use client";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Box, Typography } from "@mui/material";

const NoReviewFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
      borderRadius={4}
      bgcolor="#f9f9f9"
    >
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 48, color: "text.secondary", mb: 1 }}
      />
      <Typography variant="h6" fontWeight={600} color="text.primary">
        No Reviews Found
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        Be the first to share your thoughts about this product.
      </Typography>
    </Box>
  );
};

export default NoReviewFound;
