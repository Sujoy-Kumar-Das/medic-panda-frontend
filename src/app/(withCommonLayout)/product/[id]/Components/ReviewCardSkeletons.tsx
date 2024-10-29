import ReviewCardSkeleton from "@/components/skeleton/ReviewCardSkeleton";
import Skeletons from "@/components/skeleton/Skeletons";
import { Box } from "@mui/material";

export default function ReviewSkeletons() {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Skeletons Component={ReviewCardSkeleton} />
    </Box>
  );
}
