import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import { useConfirmUserOTPMutation } from "@/redux/api/user.api";
import { IGenericErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { SetStateAction, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const verifyOTPSchema = z.object({
  otp: z.string().refine((value) => !isNaN(Number(value)), {
    message: "OTP must be a number.",
  }),
});

interface IVerifyEmailOTPModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

interface OTPFormValues {
  otp: string;
}

const defaultValues: OTPFormValues = {
  otp: "",
};

export default function VerifyEmailOTPModal({
  open,
  setOpen,
}: IVerifyEmailOTPModalProps) {
  const [verifyUserOtp, { isLoading, isError, error, isSuccess }] =
    useConfirmUserOTPMutation();

  const handleConfirmOTP = async (value: FieldValues) => {
    const data = { otp: Number(value.otp) };
    await verifyUserOtp(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account verified successfully.");
      setOpen((prev) => !prev);
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [isSuccess, isError, error, setOpen]);

  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box>
        <Typography
          variant="h6"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Confirm your OTP and verify
        </Typography>

        <PandaForm
          onSubmit={handleConfirmOTP}
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

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit Code"
            )}
          </Button>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
