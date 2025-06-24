import Loader from "@/components/shared/loader/Loader";
import { getAllCategoriesService } from "@/services/actions/category.service";
import { getAllProductService } from "@/services/actions/product.service";
import { Box, Container } from "@mui/material";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import with SSR disabled
const ProductDrawer = dynamic(() => import("./Components/ProductDrawer"), {
  ssr: false,
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: number | string; searchTerm: string; category: string };
}) {
  const { page, searchTerm, category } = searchParams;

  const [productsResponse, categoriesResponse] = await Promise.all([
    getAllProductService({
      limit: 9,
      page: Number(page) || 1,
      searchTerm,
      category,
    }),
    getAllCategoriesService(9),
  ]);

  // Destructure the responses
  const { data: productsData } = productsResponse;
  const { data: categoriesData } = categoriesResponse;

  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Loader />
        </Box>
      }
    >
      <Container sx={{ py: 4 }}>
        <ProductDrawer
          products={productsData?.result}
          meta={productsData?.meta}
          categories={categoriesData?.result}
        />
      </Container>
    </Suspense>
  );
}
