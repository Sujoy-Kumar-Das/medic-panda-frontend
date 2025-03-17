import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import { ICategory } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import CategoryDetailsModal from "../../category-details-modal/CategoryDetailsModal";

export default function CategoryActionMenu({
  category,
}: {
  category: ICategory;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [details, setDetails] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const items = [
    {
      icon: <InfoIcon />,
      label: "Details",
      onClick: () => setDetails(true),
    },
    {
      icon: <EditIcon />,
      label: "Edit",
      onClick: () => setEdit(true),
    },
    {
      icon: <DeleteIcon />,
      label: "Delete",
      onClick: () => setDeleteModal(true),
    },
  ];

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={items}
      />

      {details && (
        <CategoryDetailsModal
          open={details}
          setOpen={setDetails}
          onClose={handleMenuClose}
          category={category}
        />
      )}
    </>
  );
}
