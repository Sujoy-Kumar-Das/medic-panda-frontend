import { IReview } from "@/types";
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
import ReviewActionButtons from "./ReviewActionButtons";

interface ReviewCardProps {
  review: IReview;
  userId: string | undefined;
}

export default function ReviewCard({ review, userId }: ReviewCardProps) {
  return (
    <Card
      key={review._id}
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Box>
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
          </Box>

          <ReviewActionButtons
            userId={userId}
            reviewId={review._id}
            reviewerId={review?.user?._id}
          />
        </Stack>

        <Divider
          sx={{
            marginBottom: 3,
            opacity: 0.6,
          }}
        />

        <Box display="flex" alignItems="center" gap={2}>
          <Image
            src={review.user?.photo}
            alt={`${review.user?.name} image`}
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
              {review.user?.name}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: "0.875rem",
                display: "block",
                marginTop: "2px",
              }}
            >
              {formatOrderDate(review.createdAt as string)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
