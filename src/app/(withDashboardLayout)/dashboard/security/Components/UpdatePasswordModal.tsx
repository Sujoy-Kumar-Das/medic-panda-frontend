import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { AnyZodObject } from "zod";

interface IUpdatePasswordModalProps {
  onClose: () => void;
  onUpdatePassword: (value: FieldValues) => Promise<void>;
  isLoading: boolean;
  validationSchema: AnyZodObject;
  defaultValues: { oldPassword: string; newPassword: string };
}

export default function UpdatePasswordModal({
  onClose,
  onUpdatePassword,
  isLoading,
  defaultValues,
  validationSchema,
}: IUpdatePasswordModalProps) {
  return (
    <CustomModal open onClose={onClose}>
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
          onSubmit={onUpdatePassword}
          resolver={zodResolver(validationSchema)}
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
              Close
            </Button>
            <LoaderButton
              type="submit"
              isLoading={isLoading}
              loadingText="Updating Password..."
            >
              Update Password
            </LoaderButton>
          </Stack>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
