import { Skeleton, Stack } from "@mui/material";

const CategoriesSkeleton = () => {
  return (
    <Stack direction={"column"} spacing={1}>
      <Skeleton variant="text" width={60} height={24} />
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} variant="text" width={120} height={24} />
      ))}
    </Stack>
  );
};

export default CategoriesSkeleton;
