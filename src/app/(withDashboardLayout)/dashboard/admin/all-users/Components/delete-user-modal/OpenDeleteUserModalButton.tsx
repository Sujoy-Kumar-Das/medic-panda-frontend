import { Dispatch, SetStateAction } from "react";
import BlockUserModal from "./DeleteUserModal";

export default function OpenDeleteUserModalButton({
  userId,
  open,
  setOpen,
}: {
  userId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <BlockUserModal open={open} setOpen={setOpen} userId={userId} />
    </>
  );
}
