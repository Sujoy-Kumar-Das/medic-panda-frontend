import { IReview } from "@/types";
import { Box, Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Grid item xs={12} md={4}>
      <Paper
        sx={{
          p: 4,
          borderRadius: 3,
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <Stack direction="row" spacing={2} mb={2} alignItems="center">
          <Image
            src={testimonial?.user?.customer?.photo}
            alt={testimonial?.user?.customer?.name}
            width={30}
            height={30}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <Box>
            <Typography fontWeight={600} color="text.primary">
              {testimonial?.user?.customer?.name}
            </Typography>
            <Box display="flex" color="warning.main">
              <Rating value={testimonial.rating} readOnly />
            </Box>
          </Box>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {`"${testimonial.comment}"`}
        </Typography>
      </Paper>
    </Grid>
  );
}
