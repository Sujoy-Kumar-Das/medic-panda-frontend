"use client";
import useToggleState from "@/hooks/useToggleState";
import useUpdateEmail from "@/hooks/useUpdateEmail";
import {
  AppRegistrationOutlined as AppRegistrationOutlinedIcon,
  EmailOutlined as EmailOutlinedIcon,
} from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import UpdateEmailModal from "./UpdateEmailModal";

export default function UpdateEmailCompo({ email }: { email: string }) {
  const updateEmailModalState = useToggleState(false);
  const { handlerFunc, isLoading } = useUpdateEmail(
    updateEmailModalState.onClose
  );

  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography color="text.secondary" fontWeight={500} mb={1}>
          Email
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
            <EmailOutlinedIcon
              sx={{ color: "primary.main", fontSize: "30px" }}
            />
            <Typography color="text.primary" fontSize="16px">
              {email}
            </Typography>
          </Stack>
          <IconButton
            color="primary"
            onClick={updateEmailModalState.onOpen}
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
      {updateEmailModalState.state && (
        <UpdateEmailModal
          onClose={updateEmailModalState.onClose}
          email={email}
          onUpdateEmail={handlerFunc}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
