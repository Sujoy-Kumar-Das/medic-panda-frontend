"use client";
import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import { ICart, IGenericErrorResponse } from "@/types";
import { Container, Stack } from "@mui/material";
import MyCartCard from "./Components/MyCartCard";

export default function MyCartPage() {
  const {
    data: carts,
    isLoading,
    error,
  } = useGetAllCartProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  if (!carts?.length) {
    return (
      <NoDataFound
        link="/product"
        message={"You Don't have any cart items."}
        text="Continue Shopping"
      />
    );
  }

  return (
    <Container>
      <Header
        title="My Cart"
        subtitle="Review your cart before placing the order"
      />

      <Stack direction={"column"} spacing={3}>
        {carts?.map((cart: ICart, index: number) => (
          <MyCartCard key={cart._id} cart={cart} index={index} />
        ))}
      </Stack>
    </Container>
  );
}
