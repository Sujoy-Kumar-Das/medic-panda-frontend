/* eslint-disable react/no-unescaped-entities */
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, CircularProgress, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { AnyZodObject } from "zod";

interface IVerifyEmailOTPModalProps {
  onClose: () => void;
  reOpenTime: number;
  defaultValues: { otp: string };
  validationSchema: AnyZodObject;
  onConfirmOtp: (values: FieldValues) => Promise<void>;
  isLoading: boolean;
}

export default function VerifyEmailOTPModal({
  onClose,
  reOpenTime,
  defaultValues,
  validationSchema,
  onConfirmOtp,
  isLoading,
}: IVerifyEmailOTPModalProps) {
  return (
    <CustomModal open onClose={onClose}>
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
          it, you wont be able to reopen it for the next{" "}
          <strong>{reOpenTime}</strong> Seconds.
        </Typography>

        <PandaForm
          onSubmit={onConfirmOtp}
          resolver={zodResolver(validationSchema)}
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
