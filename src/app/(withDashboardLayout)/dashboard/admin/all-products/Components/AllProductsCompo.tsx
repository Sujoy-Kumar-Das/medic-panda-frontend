import { Container } from "@mui/material";
import ProductsHeader from "./all-product-header/ProductsHeader";
import ProductsDataGrid from "./product-data-grid/ProductsDataGrid";

export default function AllProductsCompo({ data: products }) {
  return (
    <Container>
      <ProductsHeader />
      <ProductsDataGrid products={products} />
    </Container>
  );
}
