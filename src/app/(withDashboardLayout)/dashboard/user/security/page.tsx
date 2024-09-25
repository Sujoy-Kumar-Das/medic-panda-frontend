"use client";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import {
  AppRegistrationOutlined as AppRegistrationOutlinedIcon,
  CallOutlined as CallOutlinedIcon,
  EmailOutlined as EmailOutlinedIcon,
  KeyOutlined as KeyOutlinedIcon,
  VerifiedOutlined as VerifiedOutlinedIcon,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UpdateEmailModal from "./Components/UpdateEmailModal";
import UpdatePasswordModal from "./Components/UpdatePasswordModal";

export default function SecurityPage() {
  const { data } = useGetMeQuery(undefined);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);

  const handelPasswordModal = () => {
    setOpenPasswordModal((prev) => !prev);
  };

  const handelEmailModal = () => {
    setOpenEmailModal((prev) => !prev);
  };
  return (
    <Container sx={{ py: 4 }}>
      {/* Page Header */}
      <Box mb={4} textAlign="center">
        <Typography
          component="h1"
          variant="h4"
          color="text.primary"
          gutterBottom
        >
          Security Settings
        </Typography>
        <Typography component="h2" variant="body1" color="text.secondary">
          Manage your password, contact details, and account security
        </Typography>
      </Box>

      {/* Grid for Security Options */}
      <Grid container spacing={3}>
        {/* Email Section */}
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
                {data?.data?.user?.email}
              </Typography>
            </Stack>
            <IconButton
              color="primary"
              onClick={handelEmailModal}
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

        {/* Password Section */}
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
              <KeyOutlinedIcon
                sx={{ color: "primary.main", fontSize: "30px" }}
              />
              <Typography color="text.primary" fontSize="16px">
                ********
              </Typography>
            </Stack>
            <IconButton
              color="primary"
              sx={{
                height: "36px",
                width: "36px",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(0,123,255,0.1)",
                  boxShadow: 3,
                },
              }}
              onClick={handelPasswordModal}
            >
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>

        {/* Contact Number Section */}
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontWeight={500} mb={1}>
            Contact Number
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
              <CallOutlinedIcon
                sx={{ color: "primary.main", fontSize: "30px" }}
              />
              <Typography color="text.primary" fontSize="16px">
                01319263016
              </Typography>
            </Stack>
            <IconButton
              color="primary"
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

        {/* Verified Status Section */}
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontWeight={500} mb={1}>
            Verified Status
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
              <VerifiedOutlinedIcon
                sx={{ color: "primary.main", fontSize: "30px" }}
              />
              <Typography color="text.primary" fontSize="16px">
                Verified
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {openPasswordModal && (
        <UpdatePasswordModal
          open={openPasswordModal}
          setOpen={setOpenPasswordModal}
        />
      )}

      {openEmailModal && (
        <UpdateEmailModal open={openEmailModal} setOpen={setOpenEmailModal} />
      )}
    </Container>
  );
}
