"use client";
import Loader from "@/components/shared/loader/Loader";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { useVerifyUserMutation } from "@/redux/api/user.api";
import {
  AppRegistrationOutlined as AppRegistrationOutlinedIcon,
  EmailOutlined as EmailOutlinedIcon,
  KeyOutlined as KeyOutlinedIcon,
} from "@mui/icons-material";
import DangerousIcon from "@mui/icons-material/Dangerous";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import UpdateEmailModal from "./Components/UpdateEmailModal";
import UpdatePasswordModal from "./Components/UpdatePasswordModal";

export default function SecurityPage() {
  const { data, isLoading } = useGetMeQuery(undefined);
  const [verifyUser] = useVerifyUserMutation();
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);

  const router = useRouter();
  // Handlers for opening/closing modals
  const handelPasswordModal = () => {
    setOpenPasswordModal((prev) => !prev);
  };

  const handelEmailModal = () => {
    setOpenEmailModal((prev) => !prev);
  };

  const handelVerification = async () => {
    try {
      const res = await verifyUser(null).unwrap();
      console.log({ res });
      if (res.success) {
        toast.message(res.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
              {data?.data?.user?.isVerified ? (
                <VerifiedIcon
                  sx={{ color: "primary.main", fontSize: "30px" }}
                />
              ) : (
                <DangerousIcon sx={{ color: "red", fontSize: "30px" }} />
              )}
              <Typography color="text.primary" fontSize="16px">
                {data?.data?.user?.isVerified ? "Verified" : "Not Verified"}
              </Typography>
            </Stack>
            {!data?.data?.user?.isVerified && (
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
    </Container>
  );
}
