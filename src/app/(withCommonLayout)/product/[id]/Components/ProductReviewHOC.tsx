"use client";
import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import formatOrderDate from "@/utils/format.order.date";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

function ProductReviewCompo({ data: reviews }) {
  return (
    <Stack spacing={4}>
      {reviews.map((review) => (
        <Card
          key={review._id}
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <CardContent sx={{ padding: 3 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: 2,
              }}
            >
              {review.comment}
            </Typography>

            <Rating
              value={review.rating}
              readOnly
              precision={0.5}
              sx={{ marginBottom: 2 }}
            />

            <Divider
              sx={{
                marginBottom: 3,
                opacity: 0.6,
              }}
            />

            <Box display="flex" alignItems="center" gap={2}>
              <Image
                src={review.userInfo.photo}
                alt={`${review.userInfo.name} image`}
                height={50}
                width={50}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    fontSize: "1.1rem",
                  }}
                >
                  {review.userInfo.name}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.875rem",
                    color: "text.secondary",
                    display: "block",
                    marginTop: "2px",
                  }}
                >
                  {formatOrderDate(review.createdAt || new Date())}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

const ProductReviewHOC = HandleLoadingErrorAndNoData(ProductReviewCompo);

export default ProductReviewHOC;
