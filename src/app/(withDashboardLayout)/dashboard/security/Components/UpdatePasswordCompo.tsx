"use client";
import useToggleState from "@/hooks/useToggleState";
import {
  AppRegistrationOutlined as AppRegistrationOutlinedIcon,
  KeyOutlined as KeyOutlinedIcon,
} from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import UpdatePasswordModal from "./UpdatePasswordModal";
export default function UpdatePasswordCompo() {
  const updatePasswordModalState = useToggleState(false);
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography color="text.secondary" fontWeight={500} mb={1}>
          Password
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            bgcolor: "background.paper",
            p: 2,
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <KeyOutlinedIcon sx={{ color: "primary.main", fontSize: "30px" }} />
            <Typography color="text.primary" fontSize="16px">
              ********
            </Typography>
          </Stack>
          <IconButton
            color="primary"
            onClick={updatePasswordModalState.onOpen}
            sx={{
              height: "36px",
              width: "36px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(0,123,255,0.1)",
                boxShadow: 3,
              },
            }}
          >
            <AppRegistrationOutlinedIcon />
          </IconButton>
        </Stack>
      </Grid>

      {updatePasswordModalState.state && (
        <UpdatePasswordModal
          open={updatePasswordModalState.state}
          onClose={updatePasswordModalState.onClose}
        />
      )}
    </>
  );
}
