import {
  Box,
  Card,
  CardContent,
  Divider,
  Skeleton,
  Stack,
} from "@mui/material";
import Skeletons from "./Skeletons";

export default function ReviewCardSkeleton() {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        {/* Comment Skeleton */}
        <Skeleton
          variant="text"
          width="100%"
          height={24}
          sx={{
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: 2,
          }}
        />

        {/* Rating Skeleton */}
        <Stack direction="row" spacing={1} sx={{ marginBottom: 2 }}>
          <Skeletons
            Component={Skeleton}
            length={5}
            componentProps={{ variant: "circular", width: 24, height: 24 }}
          />
        </Stack>

        {/* Divider Skeleton */}
        <Divider
          sx={{
            marginBottom: 3,
            opacity: 0.6,
          }}
        />

        {/* User Info Skeleton */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* Profile Image Skeleton */}
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            sx={{
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />

          <Box>
            {/* User Name Skeleton */}
            <Skeleton
              variant="text"
              width={100}
              height={24}
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            />

            {/* Date Skeleton */}
            <Skeleton
              variant="text"
              width={80}
              height={18}
              sx={{
                fontSize: "0.875rem",
                marginTop: "2px",
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
