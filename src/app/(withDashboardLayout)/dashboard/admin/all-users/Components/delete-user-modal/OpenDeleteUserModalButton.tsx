import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import BlockUserModal from "./DeleteUserModal";

export default function OpenDeleteUserModalButton({
  userId,
}: {
  userId: string;
}) {
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        py={1}
        onClick={() => setOpenDeleteUserModal((prev) => !prev)}
      >
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </Stack>

      <BlockUserModal
        open={openDeleteUserModal}
        setOpen={setOpenDeleteUserModal}
        userId={userId}
      />
    </>
  );
}
