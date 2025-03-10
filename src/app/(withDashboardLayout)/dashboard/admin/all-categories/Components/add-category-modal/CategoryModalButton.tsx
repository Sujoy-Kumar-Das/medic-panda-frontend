import { Button } from "@mui/material";
import { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";

export default function CategoryModalButton() {
  const [open, setOpen] = useState(false);

  const handleCategoryModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button onClick={handleCategoryModal}>Add Category</Button>

      {open && <AddCategoryModal open={open} setOpen={setOpen} />}
    </>
  );
}
