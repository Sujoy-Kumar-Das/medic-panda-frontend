import { Button } from "@mui/material";
import { useState } from "react";
import AddProductModal from "./AddProductModal";

export default function OpenAddProductModalButton() {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenAddProductModal((prev) => !prev)}>
        Add Product
      </Button>

      <AddProductModal
        open={openAddProductModal}
        setOpen={setOpenAddProductModal}
      />
    </>
  );
}
