import useUserFieldsData from "@/hooks/useUserFieldsData";
import { Grid } from "@mui/material";
import { useState } from "react";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import UserInfoCard from "./UserInfoCard";
interface Field {
  label: string;
  value: string;
}
export default function UserInfoGrid({ user }: { user: any }) {
  const { userFields } = useUserFieldsData(user);

  // state for handle modal
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState<Field | null>(null);

  const handleOpenModal = (field: Field) => {
    setCurrentField(field);
    setOpenModal(true);
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
              })
            }
          />
        ))}
      </Grid>

      {currentField && (
        <UpdateUserInfoModal
          open={openModal}
          setOpen={setOpenModal}
          label={currentField.label}
          name={currentField.value}
        />
      )}
    </>
  );
}
