import LockOpenIcon from "@mui/icons-material/LockOpen";
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import UnblockUserModal from "./UnblockUserModal";

export default function OpenUnBlockUserButton({ userId }: { userId: string }) {
  const [openUnBlockUserModal, setOpenUnBlockUserModal] = useState(false);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        py={1}
        onClick={() => setOpenUnBlockUserModal((prev) => !prev)}
      >
        <IconButton color="success">
          <LockOpenIcon />
        </IconButton>
      </Stack>

      <UnblockUserModal
        open={openUnBlockUserModal}
        setOpen={setOpenUnBlockUserModal}
        userId={userId}
      />
    </>
  );
}
