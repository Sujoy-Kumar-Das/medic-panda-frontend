import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import OrderDetailsModal from "../order-details-modal/OrderDetailsModal";

export default function AdminOrderActionMenu({ orderId }: { orderId: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [isOpenDetails, setIsOpenOrderDetails] = useState(false);

  const onClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={[
          {
            icon: <VisibilityIcon />,
            label: "Details",
            onClick: () => setIsOpenOrderDetails(true),
          },
        ]}
      />

      {isOpenDetails && (
        <OrderDetailsModal
          open={isOpenDetails}
          setOpen={setIsOpenOrderDetails}
          orderId={orderId}
          onClose={onClose}
        />
      )}
    </>
  );
}
