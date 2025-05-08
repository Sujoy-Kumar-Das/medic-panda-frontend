import { ICart } from "@/types";
import { Grid } from "@mui/material";
import Image from "next/image";
import DeleteCartButton from "./DeleteCartButton";
import MyCartGridCardItem from "./MyCartGridCardItem";

export default function MyCartCardGrid({ cart }: { cart: ICart }) {
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
        <DeleteCartButton id={cart._id} />
      </Grid>
    </Grid>
  );
}
