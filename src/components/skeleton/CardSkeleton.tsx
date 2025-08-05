import { Card, CardContent, Grid, Skeleton } from "@mui/material";

type CardSkeletonProps = {
  count?: number;
};

export default function CardSkeleton({ count = 4 }: CardSkeletonProps) {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card elevation={0} sx={{ borderRadius: 3, p: 2 }}>
            <Skeleton
              variant="rectangular"
              height={140}
              sx={{ borderRadius: 2 }}
            />
            <CardContent>
              <Skeleton variant="text" height={24} width="80%" />
              <Skeleton variant="text" height={20} width="60%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
