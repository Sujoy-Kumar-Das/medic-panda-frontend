import CommonContainer from "@/components/shared/common-container/CommonContainer";
import { getAllProductService } from "@/services/actions/product.service";
import { Grid } from "@mui/material";
import CategorySidebar from "./Components/CategorySidebar";
import ProductCompo from "./Components/ProductCompo";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    page: number | string;
    searchTerm: string;
    category: string;
    layout: string;
  };
}) {
  const { page, searchTerm, category, layout } = searchParams;

  const { data } = await getAllProductService({
    limit: 9,
    page: Number(page) || 1,
    searchTerm,
    category,
  });

  return (
    <CommonContainer sx={{ py: 4, backgroundColor: "background.paper" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
          <ProductCompo
            products={data?.result}
            meta={data?.meta}
            layout={layout}
          />
        </Grid>
      </Grid>
    </CommonContainer>
  );
}
