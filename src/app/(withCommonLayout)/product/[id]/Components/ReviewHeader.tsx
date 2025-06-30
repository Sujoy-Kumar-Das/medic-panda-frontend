import RateReviewIcon from "@mui/icons-material/RateReview";
import { Box, Typography } from "@mui/material";

interface ReviewHeaderProps {
  reviewCount: number;
}

function ReviewHeader({ reviewCount }: ReviewHeaderProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      py={1}
      px={2}
      borderRadius={2}
      bgcolor="background.default"
    >
      <RateReviewIcon color="primary" />
      <Typography variant="h6" fontWeight={600}>
        {reviewCount} Review{reviewCount !== 1 ? "s" : ""}
      </Typography>
    </Box>
  );
}

export default ReviewHeader;
