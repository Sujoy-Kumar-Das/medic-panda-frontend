import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import useUpdateEmail from "@/hooks/useUpdateEmail";
import updateEmailValidationSchema from "@/schemas/updateEmailValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

interface IUpdateEmailModalProps {
  open: boolean;
  onClose: () => void;
  email: string;
}

export default function UpdateEmailModal({
  open,
  onClose,
  email,
}: IUpdateEmailModalProps) {
  const { handlerFunc, isLoading } = useUpdateEmail(onClose);

  const defaultValues = {
    email,
  };
  return (
    <CustomModal open={open} onClose={onClose}>
      <Box>
        <Typography
          variant="h6"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Update Your Email
        </Typography>

        {email && (
          <PandaForm
            onSubmit={handlerFunc}
            resolver={zodResolver(updateEmailValidationSchema)}
            defaultValues={defaultValues}
          >
            <PandaInputField
              type="email"
              label="Email"
              name={"email"}
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
                loadingIndicator={
                  <CircularProgress size={24} color="inherit" />
                }
              >
                Update Email
              </LoadingButton>
            </Stack>
          </PandaForm>
        )}
      </Box>
    </CustomModal>
  );
}
