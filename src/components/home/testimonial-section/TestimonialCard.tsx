import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";

export default function TestimonialCard({ testimonial }) {
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
          <Avatar src={testimonial.image} alt={testimonial.name} />
          <Box>
            <Typography fontWeight={600} color="text.primary">
              {testimonial.name}
            </Typography>
            <Box display="flex" color="warning.main">
              {[...Array(5)].map((_, i) =>
                i < testimonial.rating ? (
                  <StarIcon fontSize="small" key={i} />
                ) : (
                  <StarBorderIcon fontSize="small" key={i} />
                )
              )}
            </Box>
          </Box>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {`"${testimonial.feedback}"`}
        </Typography>
      </Paper>
    </Grid>
  );
}
