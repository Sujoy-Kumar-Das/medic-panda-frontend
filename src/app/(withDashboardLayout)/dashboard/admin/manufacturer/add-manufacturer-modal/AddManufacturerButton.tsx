import { Button } from "@mui/material";
import { useState } from "react";
import AddManufacturerModal from "./AddManufacturerModal";

export default function AddManufacturerButton() {
  const [open, setOpen] = useState(false);

  const handleManufacturerModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button onClick={handleManufacturerModal}>Add Manufacturer</Button>

      {open && <AddManufacturerModal open={open} setOpen={setOpen} />}
    </>
  );
}
