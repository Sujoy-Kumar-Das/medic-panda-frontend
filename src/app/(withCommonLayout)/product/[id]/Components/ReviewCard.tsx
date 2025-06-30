import { IReviewUser } from "@/types";
import { IModifiedUserData } from "@/types/user.type";
import formatOrderDate from "@/utils/format.order.date";
import { Close, ForumOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Fade,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { ReactNode } from "react";

interface IReviewDetails {
  _id: string;
  comment: string;
  rating?: number;
  createdAt: string;
  user: IReviewUser;
}

interface ReviewCardProps {
  review: IReviewDetails;
  openReviewReplyId?: string | undefined;
  user: IModifiedUserData | null;
  onRepliesShow?: () => void;
  onRepliesHide?: () => void;
  onAddReplyModalOpen?: () => void;
  onEdit: () => void;
  onDelete: () => Promise<void>;
  reviewLoadingIds: string[];
  cardType: "reply" | "review";
  children?: ReactNode;
}

export default function ReviewCard({
  review,
  openReviewReplyId,
  user,
  onRepliesShow,
  onRepliesHide,
  onAddReplyModalOpen,
  onEdit,
  onDelete,
  reviewLoadingIds,
  cardType,
  children,
}: ReviewCardProps) {
  const isOpen = review._id === openReviewReplyId;
  const nextTipMessage = isOpen ? "Hide Replies" : "Show Replies";
  const nextModalBtnColor = isOpen ? "secondary" : "primary";
  const nextModalHandler = isOpen ? onRepliesHide : onRepliesShow;
  const nextIcon = isOpen ? <Close /> : <ForumOutlined />;
  const isDeleteLoading = reviewLoadingIds.includes(review._id);
  const isOwner = user?.id === review.user._id;
  const isVerified = isOwner && user.isVerified;
  const commenterName = isOwner ? "You" : review.user.name;

  // Enhanced styling based on card type
  const cardVariants = {
    review: {
      borderColor: alpha("#e2e8f0", 0.8),
      shadow: "0 4px 20px rgba(0,0,0,0.08)",
    },
    reply: {
      borderColor: alpha("#cbd5e1", 0.6),
      shadow: "0 2px 12px rgba(0,0,0,0.04)",
    },
  };

  const currentVariant = cardVariants[cardType];

  return (
    <Box>
      <Fade in timeout={300}>
        <Card
          sx={{
            borderRadius: 4,
            border: `1px solid ${currentVariant.borderColor}`,
            boxShadow: currentVariant.shadow,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ padding: 3 }}>
            {/* Header Section */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              mb={2}
            >
              <Box flex={1} mr={2}>
                {/* Rating Section - Enhanced */}
                {cardType !== "reply" && review.rating && (
                  <Box mb={2}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Rating
                        value={review.rating}
                        readOnly
                        precision={0.5}
                        size="small"
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "#fbbf24",
                            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                          },
                        }}
                      />
                      <Chip
                        label={`${review.rating}/5`}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.75rem",
                          height: "20px",
                          borderColor: alpha("#fbbf24", 0.3),
                          color: "#f59e0b",
                          backgroundColor: alpha("#fbbf24", 0.1),
                        }}
                      />
                    </Stack>
                  </Box>
                )}

                {/* Comment Section - Enhanced */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "text.primary",
                    fontWeight: 400,
                    "& p": { margin: 0 },
                  }}
                >
                  {review.comment}
                </Typography>
              </Box>

              {/* Action Buttons  */}
              <Stack direction="row" spacing={0.5}>
                {user && (
                  <>
                    {cardType !== "reply" && (
                      <Zoom in timeout={200}>
                        <Tooltip title="Reply to Review" arrow>
                          <IconButton
                            size="small"
                            onClick={onAddReplyModalOpen}
                            sx={{
                              backgroundColor: alpha("#3b82f6", 0.1),
                              color: "#3b82f6",
                              "&:hover": {
                                backgroundColor: alpha("#3b82f6", 0.2),
                                transform: "scale(1.1)",
                              },
                              transition: "all 0.2s ease",
                            }}
                          >
                            <ReplyIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Zoom>
                    )}
                  </>
                )}

                {isOwner && (
                  <>
                    <Zoom in timeout={300}>
                      <Tooltip title={`Edit ${cardType}`} arrow>
                        <IconButton
                          size="small"
                          onClick={onEdit}
                          sx={{
                            backgroundColor: alpha("#10b981", 0.1),
                            color: "#10b981",
                            "&:hover": {
                              backgroundColor: alpha("#10b981", 0.2),
                              transform: "scale(1.1)",
                            },
                            transition: "all 0.2s ease",
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Zoom>

                    <Zoom in timeout={400}>
                      <Tooltip title={`Delete ${cardType}`} arrow>
                        <IconButton
                          size="small"
                          onClick={onDelete}
                          disabled={isDeleteLoading}
                          sx={{
                            backgroundColor: alpha("#ef4444", 0.1),
                            color: "#ef4444",
                            "&:hover": {
                              backgroundColor: alpha("#ef4444", 0.2),
                              transform: "scale(1.1)",
                            },
                            "&:disabled": {
                              backgroundColor: alpha("#ef4444", 0.05),
                              color: alpha("#ef4444", 0.5),
                            },
                            transition: "all 0.2s ease",
                          }}
                        >
                          {isDeleteLoading ? (
                            <CircularProgress size={16} color="inherit" />
                          ) : (
                            <DeleteIcon fontSize="small" />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Zoom>
                  </>
                )}
              </Stack>
            </Stack>

            {/* Elegant Divider */}
            <Divider
              sx={{
                my: 2,
                background: `linear-gradient(90deg, transparent 0%, ${alpha(
                  "#cbd5e1",
                  0.4
                )} 50%, transparent 100%)`,
                height: "1px",
                border: "none",
              }}
            />

            {/* Footer Section - Enhanced */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* User Info - Enhanced */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box position="relative">
                  <Avatar
                    src={review.user?.photo}
                    alt={review.user?.name}
                    sx={{
                      width: 48,
                      height: 48,
                      border: `2px solid ${alpha("#e2e8f0", 0.8)}`,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      },
                    }}
                  />
                  {/* Verified badge for review owners */}
                  {isVerified && (
                    <VerifiedIcon
                      sx={{
                        position: "absolute",
                        bottom: -2,
                        right: -2,
                        fontSize: 16,
                        color: "#3b82f6",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "1px",
                      }}
                    />
                  )}
                </Box>

                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        fontSize: "0.95rem",
                      }}
                    >
                      {review.user?.name}
                    </Typography>
                    {commenterName && (
                      <Chip
                        label={commenterName}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.65rem",
                          height: "18px",
                          borderColor: alpha("#3b82f6", 0.3),
                          color: "#3b82f6",
                          backgroundColor: alpha("#3b82f6", 0.1),
                        }}
                      />
                    )}
                  </Stack>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                    }}
                  >
                    {formatOrderDate(review.createdAt)}
                  </Typography>
                </Box>
              </Stack>

              {/* Reply Toggle Button - Enhanced */}
              {cardType === "review" && (
                <Tooltip title={nextTipMessage} arrow>
                  <IconButton
                    onClick={nextModalHandler}
                    sx={{
                      backgroundColor: isOpen
                        ? alpha("#f59e0b", 0.1)
                        : alpha("#3b82f6", 0.1),
                      color: isOpen ? "#f59e0b" : "#3b82f6",
                      border: `1px solid ${alpha(
                        isOpen ? "#f59e0b" : "#3b82f6",
                        0.2
                      )}`,
                      "&:hover": {
                        backgroundColor: isOpen
                          ? alpha("#f59e0b", 0.2)
                          : alpha("#3b82f6", 0.2),
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {nextIcon}
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Fade>

      {/* Children with smooth transition */}
      {children && (
        <Fade in={!!children} timeout={300}>
          <Box>{children}</Box>
        </Fade>
      )}
    </Box>
  );
}
