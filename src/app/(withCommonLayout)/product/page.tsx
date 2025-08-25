import ProductPageCompo from "@/components/product-page-compo/ProductPageCompo";
import CommonContainer from "@/components/shared/common-container/CommonContainer";
import { getAllProductService } from "@/services/actions/product.service";

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
      <ProductPageCompo
        products={data.result}
        meta={data.result}
        layout={layout}
      />
    </CommonContainer>
  );
}
