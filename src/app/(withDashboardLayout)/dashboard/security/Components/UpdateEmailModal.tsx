import CustomModal from "@/components/customModal/CustomModal";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useUpdateUserEmailMutation } from "@/redux/api/user.api";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { SetStateAction } from "react";
import { FieldValue } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateEmailModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultValues = {
  email: "",
};

export default function UpdateEmailModal({
  open,
  setOpen,
}: IUpdateEmailModalProps) {
  const [updateEmail, { isLoading }] = useUpdateUserEmailMutation();

  const handleUpdateEmail = async (value: FieldValue<{ email: string }>) => {
    try {
      const res = await updateEmail(value).unwrap();
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
          Update Your Email
        </Typography>

        <PandaForm
          onSubmit={handleUpdateEmail}
          //   resolver={zodResolver(updatePasswordValidationSchema)}
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

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Update Email  "
            )}
          </Button>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
