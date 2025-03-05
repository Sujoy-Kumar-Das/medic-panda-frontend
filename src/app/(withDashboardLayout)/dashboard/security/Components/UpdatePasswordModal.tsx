import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import { useChangePasswordMutation } from "@/redux/api/auth.api";
import updatePasswordValidationSchema from "@/schemas/updatePasswordValidationSchema";
import { IGenericErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { SetStateAction, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IUpdatePasswordModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultValues = {
  oldPassword: "",
  newPassword: "",
};

export default function UpdatePasswordModal({
  open,
  setOpen,
}: IUpdatePasswordModalProps) {
  const [changePassword, { isLoading, isError, error, isSuccess }] =
    useChangePasswordMutation();

  const handleUpdateInfo = async (value: FieldValues) => {
    await changePassword(value).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password changed successfully");
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
          Update Your Password
        </Typography>

        <PandaForm
          onSubmit={handleUpdateInfo}
          resolver={zodResolver(updatePasswordValidationSchema)}
          defaultValues={defaultValues}
        >
          <PandaInputField
            type="password"
            label="Old Password"
            name={"oldPassword"}
            fullWidth
            sx={{
              mb: 3,
              "& input": {
                borderColor: "primary.main",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "primary.dark",
                },
              },
            }}
          />

          <PandaInputField
            type="password"
            label="New Password"
            name={"newPassword"}
            fullWidth
            sx={{
              mb: 3,
              "& input": {
                borderColor: "primary.main",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "primary.dark",
                },
              },
            }}
          />

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Change Password"
            )}
          </Button>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
