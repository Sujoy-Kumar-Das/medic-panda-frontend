import { Box, Container, Grid, Paper, Skeleton, Stack } from "@mui/material";

export default function TestimonialSkeleton({ count = 4 }: { count?: number }) {
  return (
    <Box component="section" py={8} bgcolor="white">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {Array.from({ length: count }).map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                }}
              >
                <Stack direction="row" spacing={2} mb={2} alignItems="center">
                  <Skeleton variant="circular" width={48} height={48} />
                  <Box>
                    <Skeleton width={100} height={20} />
                    <Skeleton width={120} height={20} />
                  </Box>
                </Stack>
                <Skeleton variant="text" height={20} width="100%" />
                <Skeleton variant="text" height={20} width="90%" />
                <Skeleton variant="text" height={20} width="80%" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
