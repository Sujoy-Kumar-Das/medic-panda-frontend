"use client";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";

const ProductReviewTab = () => {
  return (
    <Card elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Reviews
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />

        <Box display="flex" alignItems="center" mb={2}>
          {/* <Avatar
            src={review.user.avatarUrl}
            alt={review.user.name}
            sx={{ width: 50, height: 50, marginRight: 2 }}
          /> */}
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Name
            </Typography>
            <Rating value={4} readOnly precision={0.5} sx={{ marginY: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, ad?
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Date
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductReviewTab;
