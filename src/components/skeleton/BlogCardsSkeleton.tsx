import { Box, Grid, Paper, Skeleton, Stack } from "@mui/material";

export default function BlogCardsSkeleton({ count = 4 }) {
  return (
    <Grid container spacing={4}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              p: 2,
              transition: "all 0.3s ease",
            }}
          >
            <Stack spacing={2}>
              {/* Image Skeleton */}
              <Skeleton
                variant="rectangular"
                height={180}
                sx={{ borderRadius: 2 }}
              />

              {/* Title Skeleton */}
              <Skeleton variant="text" height={28} width="80%" />

              {/* Excerpt Skeleton */}
              <Skeleton variant="text" height={20} width="100%" />
              <Skeleton variant="text" height={20} width="90%" />
              <Skeleton variant="text" height={20} width="70%" />

              {/* Button or footer Skeleton */}
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={80} height={30} />
              </Box>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
