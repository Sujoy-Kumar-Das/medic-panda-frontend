"use client";
import Header from "@/components/shared/header/Header";
import useDeleteCart from "@/hooks/useDeleteCart";
import { ICart } from "@/types";
import { Container, Stack } from "@mui/material";
import MyCartCard from "./MyCartCard";

function MyCartCompo({ data: carts }: { data: ICart[] }) {
  const { handlerFunc, isLoading } = useDeleteCart();
  return (
    <Container>
      <Header
        title="My Cart"
        subtitle="Review your cart before placing the order"
      />

      <Stack direction={"column"} spacing={3} pb={4}>
        {carts.map((cart: ICart, index: number) => (
          <MyCartCard
            key={cart._id}
            cart={cart}
            onDeleteCartItem={() => handlerFunc(cart._id)}
            isLoading={isLoading}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default MyCartCompo;
