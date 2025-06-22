"use client";
import Header from "@/components/shared/header/Header";
import useAddToCart from "@/hooks/useAddToCart";
import useRemoveFromWishList from "@/hooks/useRemoveFromWishList";
import { IProduct } from "@/types";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import WishListCard from "./WishListCard";

interface IWishListProduct {
  user: string;
  _id: string;
  product: IProduct;
}
function WishListCompo({ data }: { data: IWishListProduct[] }) {
  const {
    handlerFunc,
    isLoading,
    data: cartData,
  } = useAddToCart(redirectAddToCart);

  const { handlerFunc: handleRemoveItem, isLoading: removeItemLoader } =
    useRemoveFromWishList();

  const router = useRouter();

  function redirectAddToCart() {
    router.push(`/dashboard/user/check-out/${cartData._id}`);
  }

  return (
    <Container>
      <Header
        title="Your Wishlist"
        subtitle="Save your favorite products and easily access them for future purchases."
      />

      <Grid container spacing={5} pb={5}>
        {data?.map((wishlistItem) => (
          <Grid item xs={12} sm={6} md={4} key={wishlistItem._id}>
            <WishListCard
              onAddToCart={() => handlerFunc(wishlistItem.product)}
              onRemoveWishListItem={() => handleRemoveItem(wishlistItem._id)}
              isLoading={isLoading}
              isRemoveItemLoading={removeItemLoader}
              product={wishlistItem?.product}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WishListCompo;
