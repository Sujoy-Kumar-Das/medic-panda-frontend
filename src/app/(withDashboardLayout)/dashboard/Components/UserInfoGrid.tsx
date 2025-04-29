import useToggleState from "@/hooks/useToggleState";
import useUserFieldsData from "@/hooks/useUserFieldsData";
import { Grid } from "@mui/material";
import { useState } from "react";
import { AnyZodObject } from "zod";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import UserInfoCard from "./UserInfoCard";
interface Field {
  label: string;
  value: string;
  schema: AnyZodObject;
  type?: string;
  defaultValue: Object;
}
export default function UserInfoGrid({ user }: { user: any }) {
  const { userFields } = useUserFieldsData(user);

  // state for handle modal
  const userModal = useToggleState(false);

  const [currentField, setCurrentField] = useState<Field | null>(null);

  const handleOpenModal = (field: Field) => {
    setCurrentField(field);
    userModal.onOpen();
  };

  return (
    <>
      <Grid container spacing={3}>
        {userFields.map((field, index) => (
          <UserInfoCard
            key={index}
            icon={field.icon}
            label={field.label}
            value={field.value}
            onEdit={() =>
              handleOpenModal({
                label: field.label,
                value: field.name || "",
                schema: field.schema,
                type: field.type || "text",
                defaultValue: field.defaultValue,
              })
            }
          />
        ))}
      </Grid>

      {currentField && (
        <UpdateUserInfoModal
          open={userModal.state}
          onClose={userModal.onClose}
          label={currentField.label}
          name={currentField.value}
          schema={currentField.schema}
          type={currentField.type as string}
          defaultValue={currentField.defaultValue}
        />
      )}
    </>
  );
}
