import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import updateEmailValidationSchema from "@/schemas/updateEmailValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FieldValue } from "react-hook-form";

interface IUpdateEmailModalProps {
  onClose: () => void;
  email: string;
  onUpdateEmail: (value: FieldValue<{ email: string }>) => Promise<void>;
  isLoading: boolean;
}

export default function UpdateEmailModal({
  onClose,
  email,
  onUpdateEmail,
  isLoading,
}: IUpdateEmailModalProps) {
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
            onSubmit={onUpdateEmail}
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
              <LoaderButton
                loadingText="Updating Email..."
                isLoading={isLoading}
                type="submit"
              >
                Update Email
              </LoaderButton>
            </Stack>
          </PandaForm>
        )}
      </Box>
    </CustomModal>
  );
}
