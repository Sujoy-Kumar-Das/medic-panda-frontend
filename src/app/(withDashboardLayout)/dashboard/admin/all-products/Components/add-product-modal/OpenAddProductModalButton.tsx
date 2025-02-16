import { Button } from "@mui/material";
import { useState } from "react";

export default function OpenAddProductModalButton() {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenAddProductModal((prev) => !prev)}>
        Add Product
      </Button>
    </>
  );
}
