import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useUpdateUserInfo from "@/hooks/useUpdateUserInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { AnyZodObject } from "zod";

interface IUpdateUserInfo {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  label: string;
  name: string;
  schema: AnyZodObject;
  type: string;
}

export default function UpdateUserInfoModal({
  open,
  setOpen,
  label,
  name,
  schema,
  type,
}: IUpdateUserInfo) {
  // close the modal;
  const handleCloseModal = () => {
    setOpen(false);
  };

  const { handlerFunc, isLoading } = useUpdateUserInfo(handleCloseModal);

  const handleUpdateInformation = async (value: FieldValues) => {
    await handlerFunc(value);
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box>
        <Typography
          variant="h6"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Update Your {label}
        </Typography>

        <PandaForm
          onSubmit={handleUpdateInformation}
          resolver={zodResolver(schema)}
        >
          <PandaInputField
            type={type}
            name={name}
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

          <LoaderButton
            isLoading={isLoading}
            loadingText={`Updating ${label} info`}
            type="submit"
            fullWidth
          >{`Update ${label} info`}</LoaderButton>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
