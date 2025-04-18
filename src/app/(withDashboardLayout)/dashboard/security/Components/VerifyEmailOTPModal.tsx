/* eslint-disable react/no-unescaped-entities */
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import useConfirmVerificationWithOTP from "@/hooks/useConfirmVerificationWithOTP";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, CircularProgress, Typography } from "@mui/material";
import { z } from "zod";

const verifyOTPSchema = z.object({
  otp: z.string().refine((value) => !isNaN(Number(value)), {
    message: "OTP must be a number.",
  }),
});

interface IVerifyEmailOTPModalProps {
  open: boolean;
  onClose: () => void;
}

interface OTPFormValues {
  otp: string;
}

const defaultValues: OTPFormValues = {
  otp: "",
};

export default function VerifyEmailOTPModal({
  open,
  onClose,
}: IVerifyEmailOTPModalProps) {
  const { handlerFunc, isLoading } = useConfirmVerificationWithOTP(onClose);

  return (
    <CustomModal open={open} onClose={onClose}>
      <Box>
        <Typography
          variant="h6"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Confirm your OTP and verify
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: 500, color: "text.secondary" }}
        >
          <strong>[NOTE]</strong> Please do not close this modal. If you close
          it, you wont be able to reopen it for the next 2 minutes.
        </Typography>

        <PandaForm
          onSubmit={handlerFunc}
          resolver={zodResolver(verifyOTPSchema)}
          defaultValues={defaultValues}
        >
          <PandaInputField
            type="number"
            label="OTP"
            name={"otp"}
            fullWidth
            sx={{
              mb: 3,
              "& input": {
                borderColor: "primary.main",
                transition: "border-color 0.3s ease",
              },
            }}
          />

          <LoadingButton
            type="submit"
            fullWidth
            disabled={isLoading}
            loadingIndicator={<CircularProgress size={24} color="inherit" />}
          >
            Submit Code
          </LoadingButton>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
