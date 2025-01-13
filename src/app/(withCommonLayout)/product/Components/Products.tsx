"use client";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import ProductCard from "@/components/ui/card/productCard/ProductCard";
import { IProduct } from "@/types";
import { Grid, Pagination, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProductProps {
  products: IProduct[];
  meta: any;
}

const Products = ({ products, meta }: IProductProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // pagination handler
  const handlePagination = (event: any, page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page) {
      params.set("page", String(page));
    } else {
      params.delete("page");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      {products?.length ? (
        <>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Stack direction={"row"} justifyContent={"center"} mt={5}>
            <Pagination count={meta.totalPage} onChange={handlePagination} />
          </Stack>
        </>
      ) : (
        <NoDataFound message="No Data Found" />
      )}
    </>
  );
};

export default Products;
