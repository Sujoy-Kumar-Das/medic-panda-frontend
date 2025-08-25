import PaginationCompo from "@/components/shared/PaginationCompo/PaginationCompo";
import ProductLayoutContextProvider from "@/lib/providers/ProductLayoutContextProvider";
import { IProduct } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import ProductViewLayout from "./ProductViewLayout";
import ProductsList from "./ProductsList";

interface IProductProps {
  products: IProduct[];
  meta: any;
}

export default function ProductCompo({ products, meta }: IProductProps) {
  return (
    <Box>
      <ProductLayoutContextProvider>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"text.primary"}
          mb={5}
        >
          <Typography variant="h5" component="h1" color={"text.primary"}>
            {products?.length} Products Found.
          </Typography>

          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography variant="body1" component="h1" color={"text.primary"}>
              View
            </Typography>
            <ProductViewLayout />
          </Stack>
        </Stack>

        <ProductsList products={products} />
      </ProductLayoutContextProvider>

      <Stack direction={"row"} justifyContent={"center"} mt={5}>
        <PaginationCompo totalPageCount={meta?.totalPage} />
      </Stack>
    </Box>
  );
}
