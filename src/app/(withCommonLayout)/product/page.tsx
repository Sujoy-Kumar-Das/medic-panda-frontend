import { getAllProductService } from "@/services/actions/product.service";
import { Container } from "@mui/material";
import ProductDrawer from "./Components/ProductDrawer";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: number | string; searchTerm: string; category: string };
}) {
  const { page, searchTerm, category } = searchParams;

  const { data } = await getAllProductService({
    limit: 9,
    page: (page as number) || 1,
    searchTerm,
    category,
  });

  return (
    <Container sx={{ py: 4 }}>
      <ProductDrawer products={data.result} meta={data.meta} />
    </Container>
  );
}
