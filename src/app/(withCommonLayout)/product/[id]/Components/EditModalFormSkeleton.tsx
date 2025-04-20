import { Box, Skeleton } from "@mui/material";

export default function EditModalFormSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        height={120}
        sx={{
          borderRadius: 2,
          mb: 3,
          backgroundColor: "grey.200",
        }}
      />
      <Skeleton variant="rounded" width={"100%"} height={40} />
    </Box>
  );
}
