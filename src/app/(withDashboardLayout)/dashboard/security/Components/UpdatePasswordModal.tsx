import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import useChangePassword from "@/hooks/useChangePassword";
import updatePasswordValidationSchema from "@/schemas/updatePasswordValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

interface IUpdatePasswordModalProps {
  open: boolean;
  onClose: () => void;
}

const defaultValues = {
  oldPassword: "",
  newPassword: "",
};

export default function UpdatePasswordModal({
  open,
  onClose,
}: IUpdatePasswordModalProps) {
  const { handlerFunc, isLoading } = useChangePassword();
  return (
    <CustomModal open={open} onClose={onClose}>
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
          onSubmit={handlerFunc}
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

          <Stack direction={"row"} justifyContent={"flex-end"} gap={1}>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <LoadingButton
              type="submit"
              disabled={isLoading}
              loading={isLoading}
              loadingIndicator={<CircularProgress size={24} color="inherit" />}
            >
              Update Password
            </LoadingButton>
          </Stack>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
