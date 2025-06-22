import { ICart } from "@/types";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import Image from "next/image";
import MyCartGridCardItem from "./MyCartGridCardItem";

interface MyCartCardGridProps {
  cart: ICart;
  onDeleteCart: () => Promise<void>;
  isLoading: boolean;
}

export default function MyCartCardGrid({
  cart,
  onDeleteCart,
  isLoading,
}: MyCartCardGridProps) {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid item xs={12} md={2}>
        <Image
          alt="thumbnail"
          src={cart?.product?.thumbnail}
          height={120}
          width={120}
          style={{
            borderRadius: "16px",
          }}
        />
      </Grid>

      <MyCartGridCardItem
        mdColum={3}
        title={cart.product.name}
        value={cart.product.category.name}
      />

      <MyCartGridCardItem
        mdColum={2}
        title={"Original Price"}
        value={`$${cart?.product?.price}`}
        sxProps={{
          textDecoration: `${cart?.product?.discount && "line-through"}`,
        }}
      />

      <MyCartGridCardItem
        mdColum={2}
        title={"Discount Price"}
        value={
          cart?.product?.discount
            ? `$${cart?.product?.discount?.discountPrice}`
            : "Discount Closed"
        }
      />

      <Grid item xs={12} md={2}>
        <IconButton
          color="error"
          sx={{
            borderRadius: 1,
            bgcolor: "error.main",
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              bgcolor: "error.dark",
            },
          }}
          disabled={isLoading}
          onClick={onDeleteCart}
        >
          <DeleteOutlineOutlined />
        </IconButton>
      </Grid>
    </Grid>
  );
}
