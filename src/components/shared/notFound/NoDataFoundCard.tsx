"use client";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Box, SxProps, Typography } from "@mui/material";

interface NoDataFoundCardProps {
  title: string;
  subtitle: string;
  sxProps?: SxProps;
}

const NoDataFoundCard = ({
  title,
  subtitle,
  sxProps,
}: NoDataFoundCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
      borderRadius={4}
      bgcolor="#f9f9f9"
      sx={{ ...sxProps }}
    >
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 48, color: "text.secondary", mb: 1 }}
      />
      <Typography variant="h6" fontWeight={600} color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default NoDataFoundCard;
