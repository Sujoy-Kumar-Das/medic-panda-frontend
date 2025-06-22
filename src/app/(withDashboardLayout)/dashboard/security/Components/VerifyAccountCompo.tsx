"use client";
import useConfirmVerificationWithOTP from "@/hooks/useConfirmVerificationWithOTP";
import useSentVerificationOTP from "@/hooks/useSentVerificationOTP";
import { useTimer } from "@/hooks/useTimer";
import useToggleState from "@/hooks/useToggleState";
import { AppRegistrationOutlined as AppRegistrationOutlinedIcon } from "@mui/icons-material";
import DangerousIcon from "@mui/icons-material/Dangerous";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { toast } from "sonner";
import { z } from "zod";
import VerifyEmailOTPModal from "./VerifyEmailOTPModal";

const verifyOTPSchema = z.object({
  otp: z.string().refine((value) => !isNaN(Number(value)), {
    message: "OTP must be a number.",
  }),
});

interface OTPFormValues {
  otp: string;
}
const defaultValues: OTPFormValues = {
  otp: "",
};

export default function VerifyAccountCompo({
  isVerified,
}: {
  isVerified: boolean;
}) {
  const { startTimer, canRetry, timer } = useTimer({
    storageKey: "verify-timer",
  });

  const verifyAccountModalState = useToggleState(false);

  const { handlerFunc, isLoading } = useSentVerificationOTP();

  const handleEmailVerification = async () => {
    if (!canRetry) {
      toast.error(`Please Wait ${timer} seconds.`);
      return;
    }

    await handlerFunc();
    startTimer();
    verifyAccountModalState.onOpen();
  };

  const handleCloseConfirmOTPModal = () => {
    verifyAccountModalState.onClose();
    localStorage.removeItem("verify-timer");
  };

  const { handlerFunc: confirmOtpHandler, isLoading: confirmOTPLoading } =
    useConfirmVerificationWithOTP(handleCloseConfirmOTPModal);

  return (
    <>
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
            {isVerified ? (
              <VerifiedIcon sx={{ color: "primary.main", fontSize: "30px" }} />
            ) : (
              <DangerousIcon sx={{ color: "red", fontSize: "30px" }} />
            )}
            <Typography color="text.primary" fontSize="16px">
              {isVerified ? "Verified" : "Not Verified"}
            </Typography>
          </Stack>

          {!isVerified && (
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
              onClick={handleEmailVerification}
              disabled={isLoading || !canRetry}
            >
              <AppRegistrationOutlinedIcon />
            </IconButton>
          )}
        </Stack>
      </Grid>

      {verifyAccountModalState.state && (
        <VerifyEmailOTPModal
          onClose={verifyAccountModalState.onClose}
          reOpenTime={timer}
          isLoading={confirmOTPLoading}
          onConfirmOtp={confirmOtpHandler}
          validationSchema={verifyOTPSchema}
          defaultValues={defaultValues}
        />
      )}
    </>
  );
}
