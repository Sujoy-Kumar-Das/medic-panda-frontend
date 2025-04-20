import { IReply } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface ReplyCardProps {
  reply: IReply;
}

export default function ReviewReplyCard({ reply }: ReplyCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        boxShadow: 0,
        bgcolor: "background.default",
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
              {reply.reply}
            </Typography>
          </Box>
        </Stack>

        <Divider
          sx={{
            marginBottom: 3,
            opacity: 0.6,
          }}
        />

        <Box display="flex" alignItems="center" gap={2}>
          <Image
            src={reply.user?.photo}
            alt={`${reply.user?.name} image`}
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
              {reply.user?.name}
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
              {formatOrderDate(
                (reply.createdAt as string) || new Date().toLocaleString()
              )}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
