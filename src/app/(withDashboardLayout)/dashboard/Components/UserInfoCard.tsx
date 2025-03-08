import { AppRegistrationOutlined as AppRegistrationOutlinedIcon } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

interface UserInfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string | null;
  onEdit?: () => void;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  icon: Icon,
  label,
  value,
  onEdit,
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Typography color="text.secondary" sx={{ fontSize: "16px", mb: 2 }}>
        {label}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          bgcolor: "background.default",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Icon sx={{ color: "text.secondary", fontSize: "30px" }} />
          <Typography color="text.secondary" fontSize="16px">
            {value || "N/A"}
          </Typography>
        </Stack>

        {onEdit && (
          <IconButton
            color="info"
            sx={{ height: "20px", width: "20px" }}
            onClick={onEdit}
          >
            <AppRegistrationOutlinedIcon />
          </IconButton>
        )}
      </Stack>
    </Grid>
  );
};

export default UserInfoCard;
