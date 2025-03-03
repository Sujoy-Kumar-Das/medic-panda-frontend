import { Button, Chip } from "@mui/material";
import { useState } from "react";
import ChangeOrderStatusModal from "./ChangeOrderStatusModal";

export default function ChangeOrderStatusModalButton({
  orderId,
}: {
  orderId: string;
}) {
  const [open, setOpen] = useState(false);

  const handleChangeStatus = () => setOpen((prev) => !prev);

  return (
    <>
      <Chip
        onClick={handleChangeStatus}
        color="primary"
        label={"Change Status"}
        component={Button}
        sx={{ display: "flex", justifySelf: "center", my: 1 }}
      />

      <ChangeOrderStatusModal open={open} setOpen={setOpen} orderId={orderId} />
    </>
  );
}
