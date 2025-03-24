import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";

export default function OrderDetailsSkeleton() {
  return (
    <>
      {/* Order Info Skeleton */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        <Skeleton width="40%" />
      </Typography>
      <Skeleton width="80%" height={20} />
      <Skeleton width="60%" height={20} />
      <Skeleton width="70%" height={20} />
      <Skeleton width="90%" height={20} />

      <Divider sx={{ my: 2 }} />

      {/* Payment Info Skeleton */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        <Skeleton width="40%" />
      </Typography>
      <Skeleton width="80%" height={20} />
      <Skeleton width="60%" height={20} />
      <Skeleton width="70%" height={20} />
      <Skeleton width="90%" height={20} />

      <Divider sx={{ my: 2 }} />

      {/* User Info Skeleton */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        <Skeleton width="40%" />
      </Typography>
      <Skeleton width="80%" height={20} />
      <Skeleton width="60%" height={20} />
      <Skeleton width="90%" height={20} />

      <Divider sx={{ my: 2 }} />

      {/* Ordered Products Skeleton */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        <Skeleton width="40%" />
      </Typography>

      <Stack spacing={2}>
        {Array.from(new Array(2)).map((_, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1,
              border: "1px solid #ddd",
              borderRadius: 1,
            }}
          >
            <Skeleton variant="circular" width={50} height={50} />
            <Box sx={{ flex: 1 }}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="60%" height={20} />
              <Skeleton width="50%" height={20} />
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );
}
