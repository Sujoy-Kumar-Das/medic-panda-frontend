import BlockIcon from "@mui/icons-material/Block";
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import BlockUserModal from "./BlockUserModal";

export default function OpenBlockUserModalButton({
  userId,
}: {
  userId: string;
}) {
  const [openBlockUserModal, setOpenBlockUserModal] = useState(false);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        py={1}
        onClick={() => setOpenBlockUserModal((prev) => !prev)}
      >
        <IconButton color="error">
          <BlockIcon />
        </IconButton>
      </Stack>

      <BlockUserModal
        openBlockUserModal={openBlockUserModal}
        setOpenBlockUserModal={setOpenBlockUserModal}
        userId={userId}
      />
    </>
  );
}
