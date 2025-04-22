import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import Header from "@/components/shared/header/Header";
import { ICart } from "@/types";
import { Container, Stack } from "@mui/material";
import MyCartCard from "./MyCartCard";

function MyCartCompo({ data: carts }: { data: ICart[] }) {
  return (
    <Container>
      <Header
        title="My Cart"
        subtitle="Review your cart before placing the order"
      />

      <Stack direction={"column"} spacing={3} pb={4}>
        {carts.map((cart: ICart, index: number) => (
          <MyCartCard key={cart._id} cart={cart} index={index} />
        ))}
      </Stack>
    </Container>
  );
}

const MyCartWithHOC = HandleLoadingErrorAndNoData(MyCartCompo);

export default MyCartWithHOC;
