"use client";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import ProductCardHorizontal from "@/components/ui/card/productCard/ProductCardHorizontal";
import ProductCardVertical from "@/components/ui/card/productCard/ProductCardVertical";
import useProductLayoutContext from "@/hooks/useProductLayoutContext";
import { IProduct } from "@/types";
import { Grid, Stack } from "@mui/material";

interface IProductProps {
  products: IProduct[];
}

const ProductsList = ({ products }: IProductProps) => {
  const { value } = useProductLayoutContext();
  return (
    <>
      {products?.length ? (
        <>
          {value === "grid" ? (
            <Grid container spacing={2}>
              {products?.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                  <ProductCardVertical product={product} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Stack direction={"column"} spacing={2}>
              {products?.map((product) => (
                <ProductCardHorizontal product={product} key={product._id} />
              ))}
            </Stack>
          )}
        </>
      ) : (
        <NoDataFound message="No Data Found" />
      )}
    </>
  );
};

export default ProductsList;
