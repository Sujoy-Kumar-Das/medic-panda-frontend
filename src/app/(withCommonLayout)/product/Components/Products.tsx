import NoDataFound from "@/components/shared/notFound/NoDataFound";
import PaginationCompo from "@/components/shared/PaginationCompo/PaginationCompo";
import ProductCard from "@/components/ui/card/productCard/ProductCard";
import { IProduct } from "@/types";
import { Grid, Stack } from "@mui/material";

interface IProductProps {
  products: IProduct[];
  meta: any;
}

const Products = ({ products, meta }: IProductProps) => {
  return (
    <>
      {products?.length ? (
        <>
          <Grid container spacing={2}>
            {products?.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Stack direction={"row"} justifyContent={"center"} mt={5}>
            <PaginationCompo totalPageCount={meta?.totalPage} />
          </Stack>
        </>
      ) : (
        <NoDataFound message="No Data Found" />
      )}
    </>
  );
};

export default Products;
