import useToggleState from "@/hooks/useToggleState";
import { Button, Chip } from "@mui/material";
import ChangeOrderStatusModal from "./ChangeOrderStatusModal";

export default function ChangeOrderStatusModalButton({
  orderId,
}: {
  orderId: string;
}) {
  const changeOrderStatusModal = useToggleState();

  return (
    <>
      <Chip
        onClick={changeOrderStatusModal.onOpen}
        color="primary"
        label={"Change Status"}
        component={Button}
        sx={{ display: "flex", justifySelf: "center", my: 1 }}
      />

      {changeOrderStatusModal.state && (
        <ChangeOrderStatusModal
          onClose={changeOrderStatusModal.onClose}
          orderId={orderId}
        />
      )}
    </>
  );
}
