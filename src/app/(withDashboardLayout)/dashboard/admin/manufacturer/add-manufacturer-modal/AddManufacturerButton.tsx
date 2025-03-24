import useToggleState from "@/hooks/useToggleState";
import { Button } from "@mui/material";
import AddManufacturerModal from "./AddManufacturerModal";

export default function AddManufacturerButton() {
  const addManufacturerModal = useToggleState();

  return (
    <>
      <Button onClick={addManufacturerModal.onOpen}>Add Manufacturer</Button>

      {addManufacturerModal.state && (
        <AddManufacturerModal
          open={addManufacturerModal.state}
          onClose={addManufacturerModal.onClose}
        />
      )}
    </>
  );
}
