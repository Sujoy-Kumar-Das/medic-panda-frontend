import useUpdateUserInfo from "@/hooks/useUpdateUserInfo";
import useUserFieldsData from "@/hooks/useUserFieldsData";
import { Box, Container, Stack } from "@mui/material";
import { ElementType, useState } from "react";
import { AnyZodObject } from "zod";
import UserInfoGrid from "./UserInfoGrid";
import UserInfoHeader from "./UserInfoHeader";

export interface IUserCurrentField {
  id: string;
  icon: ElementType;
  label: string;
  value: string;
  schema: AnyZodObject;
  type?: string;
  name: string;
  defaultValue: Object;
}

function UserInfoCompo({ data }: { data: any }) {
  // derive the user information for user fields
  const { userFields } = useUserFieldsData(data);

  // store the value of field
  const [currentField, setCurrentField] = useState<IUserCurrentField | null>(
    null
  );

  // open the modal
  const handleOpenModal = (field: IUserCurrentField) => {
    setCurrentField({
      ...field,
      type: field.type || "text",
    });
  };

  // close the modal handler
  const handleCloseModal = () => setCurrentField(null);

  // custom hook for user info updateation
  const { handlerFunc, isLoading } = useUpdateUserInfo(handleCloseModal);

  return (
    <Container>
      <Stack direction="row" justifyContent="center" mt={3} mb={4}>
        <Box sx={{ width: "100%" }}>
          <UserInfoHeader user={data} />

          <UserInfoGrid
            onOpenEditModal={handleOpenModal}
            currentField={currentField}
            isLoading={isLoading}
            onCloseModal={handleCloseModal}
            onUpdateUserInfo={handlerFunc}
            userFields={userFields}
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default UserInfoCompo;
