import useToggleState from "@/hooks/useToggleState";
import { Button } from "@mui/material";
import AddCategoryModal from "./AddCategoryModal";

export default function CategoryModalButton() {
  const addCategoryModal = useToggleState();

  return (
    <>
      <Button onClick={addCategoryModal.onOpen}>Add Category</Button>

      {addCategoryModal.state && (
        <AddCategoryModal onClose={addCategoryModal.onClose} />
      )}
    </>
  );
}
