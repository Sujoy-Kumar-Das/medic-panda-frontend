import CustomModal from "@/components/customModal/CustomModal";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useChangePasswordMutation } from "@/redux/api/auth.api";
import updatePasswordValidationSchema from "@/schemas/updatePasswordValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { SetStateAction } from "react";
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
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleUpdateInfo = async (value: FieldValues) => {
    try {
      const res = await changePassword(value).unwrap();
      if (res.success) {
        toast.success(res.message);
        setOpen((prev) => !prev);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

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
