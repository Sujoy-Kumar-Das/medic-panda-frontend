import useToggleState from "@/hooks/useToggleState";
import { Button } from "@mui/material";
import AddAdminModal from "./AddAdminModal";

export default function OpenAddAdminModalButton() {
  const addAdminModal = useToggleState();
  return (
    <>
      <Button onClick={addAdminModal.onOpen}>Add Admin</Button>

      <AddAdminModal
        open={addAdminModal.state}
        onClose={addAdminModal.onClose}
      />
    </>
  );
}
