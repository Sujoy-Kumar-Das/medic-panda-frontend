import ReviewCardSkeleton from "@/components/skeleton/ReviewCardSkeleton";
import Skeletons from "@/components/skeleton/Skeletons";
import { Box } from "@mui/material";

export default function ReplySkeletons() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      width={"95%"}
      marginLeft={"auto"}
      marginTop={3}
    >
      <Skeletons Component={ReviewCardSkeleton} />
    </Box>
  );
}
