import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import UserInfoCard from "./UserInfoCard";
import { IUserCurrentField } from "./UserInfoCompo";

interface UserInfoGridProps {
  userFields: IUserCurrentField[];
  onOpenEditModal: (field: IUserCurrentField) => void;
  currentField: IUserCurrentField | null;
  onCloseModal: () => void;
  isLoading: boolean;
  onUpdateUserInfo: (filedValue: FieldValues) => Promise<void>;
}

export default function UserInfoGrid({
  userFields,
  onOpenEditModal,
  currentField,
  onCloseModal,
  isLoading,
  onUpdateUserInfo,
}: UserInfoGridProps) {
  return (
    <>
      <Grid container spacing={3}>
        {userFields.map((field) => (
          <UserInfoCard
            key={field.id}
            onEdit={() => onOpenEditModal(field)}
            icon={field.icon}
            label={field.label}
            value={field.value}
          />
        ))}
      </Grid>

      {currentField && (
        <UpdateUserInfoModal
          onClose={onCloseModal}
          isLoading={isLoading}
          onUpdateUserInfo={onUpdateUserInfo}
          defaultValue={currentField.defaultValue}
          label={currentField.label}
          name={currentField.name}
          schema={currentField.schema}
          type={currentField.type || "text"}
        />
      )}
    </>
  );
}
