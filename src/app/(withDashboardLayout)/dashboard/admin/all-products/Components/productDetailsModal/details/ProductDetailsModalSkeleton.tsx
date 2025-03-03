import { Box, Card, Divider, Grid, Skeleton, Stack } from "@mui/material";

export default function ProductDetailsModalSkeleton() {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "grey.100",
        minWidth: 600,
        display: "flex",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "xl",
          p: 6,
          boxShadow: 3,
          borderRadius: "16px",
        }}
      >
        {/* Skeleton for Image */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Skeleton
            variant="rectangular"
            width={220}
            height={220}
            sx={{ borderRadius: 2 }}
          />
        </Box>

        {/* Skeleton for Product Header */}
        <Stack spacing={2} alignItems="center" mb={4}>
          <Skeleton variant="text" width={180} height={32} />
          <Skeleton variant="text" width={150} height={24} />
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="text" width={120} height={20} />
            <Skeleton variant="rectangular" width={16} height={16} />
            <Skeleton variant="text" width={120} height={20} />
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Skeleton for Product Information Grid */}
        <Grid container spacing={3}>
          {/* Pricing */}
          <Grid item xs={12} sm={6}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={120} height={32} sx={{ mt: 2 }} />
            <Skeleton variant="text" width={180} height={24} sx={{ mt: 1 }} />
          </Grid>

          {/* Stock Status */}
          <Grid item xs={12} sm={6}>
            <Skeleton variant="text" width={100} height={24} />
            <Skeleton
              variant="rectangular"
              width={100}
              height={32}
              sx={{ mt: 2 }}
            />
          </Grid>

          {/* Rating & Wishlist */}
          <Grid item xs={12} sm={6}>
            <Skeleton variant="text" width={120} height={24} />
            <Skeleton
              variant="rectangular"
              width={100}
              height={32}
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Skeleton for Discount Period */}
        <Box
          sx={{
            bgcolor: "green.50",
            p: 2,
            borderRadius: 1,
            border: 1,
            borderColor: "green.300",
          }}
        >
          <Skeleton variant="text" width={100} height={24} />
          <Skeleton variant="text" width={200} height={20} sx={{ mt: 1 }} />
        </Box>
      </Card>
    </Box>
  );
}
