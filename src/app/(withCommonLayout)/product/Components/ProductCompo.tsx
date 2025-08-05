import { IProduct } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import ProductViewLayout from "./ProductViewLayout";
import ProductsList from "./ProductsList";
import PaginationCompo from "@/components/shared/PaginationCompo/PaginationCompo";

interface IProductProps {
  products: IProduct[];
  layout: string;
  meta: any;
}

export default function ProductCompo({
  products,
  meta,
  layout,
}: IProductProps) {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"text.primary"}
        mb={5}
      >
        <Typography variant="h5" component="h1" color={"text.primary"}>
          {products.length} Products Found.
        </Typography>

        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography variant="body1" component="h1" color={"text.primary"}>
            View
          </Typography>
          <ProductViewLayout />
        </Stack>
      </Stack>

      <ProductsList products={products} layout={layout} />

      <Stack direction={"row"} justifyContent={"center"} mt={5}>
        <PaginationCompo totalPageCount={meta?.totalPage} />
      </Stack>
    </Box>
  );
}
