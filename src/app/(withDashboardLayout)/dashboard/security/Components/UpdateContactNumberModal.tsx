import CustomModal from "@/components/customModal/CustomModal";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useUpdateCustomerInfoMutation } from "@/redux/api/customer.api";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { SetStateAction } from "react";
import { FieldValue } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateContactModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultValues = {
  contact: "",
};

export default function UpdateContactNumberModal({
  open,
  setOpen,
}: IUpdateContactModalProps) {
  const [updateCustomerInfo, { isLoading }] = useUpdateCustomerInfoMutation();

  const handleUpdateContact = async (
    value: FieldValue<{ contact: string }>
  ) => {
    try {
      const res = await updateCustomerInfo(value).unwrap();
      console.log({ res });
      if (res.success) {
        toast.success(res.message);
        setOpen((prev) => !prev);
      }
    } catch (error: any) {
      console.log(error);
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
          Update Your Contact Number
        </Typography>

        <PandaForm
          onSubmit={handleUpdateContact}
          //   resolver={zodResolver(updatePasswordValidationSchema)}
          defaultValues={defaultValues}
        >
          <PandaInputField
            type="tel"
            label="Contact"
            name={"contact"}
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
              "Update"
            )}
          </Button>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
