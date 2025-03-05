import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import { useUpdateUserEmailMutation } from "@/redux/api/user.api";
import { IGenericErrorResponse } from "@/types";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { SetStateAction, useEffect } from "react";
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
  const [updateEmail, { isLoading, isError, error, isSuccess }] =
    useUpdateUserEmailMutation();

  const handleUpdateEmail = async (value: FieldValue<{ email: string }>) => {
    await updateEmail(value).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Email changed successfully");
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
