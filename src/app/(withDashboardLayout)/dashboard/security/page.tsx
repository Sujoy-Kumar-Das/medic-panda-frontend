"use client";
import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { useVerifyUserMutation } from "@/redux/api/user.api";
import { IGenericErrorResponse } from "@/types";
import {
  AppRegistrationOutlined as AppRegistrationOutlinedIcon,
  EmailOutlined as EmailOutlinedIcon,
  KeyOutlined as KeyOutlinedIcon,
} from "@mui/icons-material";
import DangerousIcon from "@mui/icons-material/Dangerous";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import UpdateEmailModal from "./Components/UpdateEmailModal";
import UpdatePasswordModal from "./Components/UpdatePasswordModal";
import VerifyEmailOTPModal from "./Components/VerifyEmailOTPModal";

export default function SecurityPage() {
  const { data, isLoading, error } = useGetMeQuery(undefined);
  const [verifyUser, { error: verificationError, isSuccess, isError }] =
    useVerifyUserMutation();
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [otpModal, setOTPModal] = useState(false);

  // Handlers for opening/closing modals
  const handelPasswordModal = () => {
    setOpenPasswordModal((prev) => !prev);
  };

  const handelEmailModal = () => {
    setOpenEmailModal((prev) => !prev);
  };

  const handelVerification = async () => {
    await verifyUser(undefined).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Please check your email and verify.");
      setOTPModal((prev) => !prev);
    } else if (isError) {
      const errorMessage = verificationError as IGenericErrorResponse;
      toast.error(errorMessage.message);
    }
  }, [isSuccess, isError, verificationError]);

  // loader
  if (isLoading) {
    return <Loader />;
  }

  // error
  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  if (!data) {
    return (
      <NoDataFound
        message="You are not authorize."
        link="/register/login"
        text="Login "
      />
    );
  }

  return (
    <Container>
      {/* Page Header */}
      <Header
        title="Account Security"
        subtitle="Manage your security settings and protect your account with enhanced security measures."
      />

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
                {data?.user?.email}
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
              onClick={handelPasswordModal}
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

        {/* Verification Section */}
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontWeight={500} mb={1}>
            Verify
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
              {data?.user?.isVerified ? (
                <VerifiedIcon
                  sx={{ color: "primary.main", fontSize: "30px" }}
                />
              ) : (
                <DangerousIcon sx={{ color: "red", fontSize: "30px" }} />
              )}
              <Typography color="text.primary" fontSize="16px">
                {data?.user?.isVerified ? "Verified" : "Not Verified"}
              </Typography>
            </Stack>
            {!data?.user?.isVerified && (
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
                onClick={handelVerification}
              >
                <AppRegistrationOutlinedIcon />
              </IconButton>
            )}
          </Stack>
        </Grid>
      </Grid>

      {/* Modals for updating email and password */}
      {openPasswordModal && (
        <UpdatePasswordModal
          open={openPasswordModal}
          setOpen={setOpenPasswordModal}
        />
      )}

      {openEmailModal && (
        <UpdateEmailModal open={openEmailModal} setOpen={setOpenEmailModal} />
      )}

      {otpModal && (
        <VerifyEmailOTPModal open={otpModal} setOpen={setOTPModal} />
      )}
    </Container>
  );
}
