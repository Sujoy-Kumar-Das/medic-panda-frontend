import { Button } from "@mui/material";
import { useState } from "react";
import AddAdminModal from "./AddAdminModal";

export default function OpenAddAdminModalButton() {
  const [openAddAdminModal, setOpenAddAdminModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenAddAdminModal((prev) => !prev)}>
        Add Admin
      </Button>

      <AddAdminModal
        openAddAdminModal={openAddAdminModal}
        setOpenAddAdminModal={setOpenAddAdminModal}
      />
    </>
  );
}
