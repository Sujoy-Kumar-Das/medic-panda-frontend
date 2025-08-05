import CommonContainer from "@/components/shared/common-container/CommonContainer";
import CommonHeader from "@/components/shared/header/CommonHeader";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";
import BestSellerProductList from "./BestSellerProductList";

export default function OurBestSellerProductsSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Our Best Sellers"
        subtitle="Top-rated products loved by our customers"
      />

      <Suspense fallback={<CardSkeleton count={4} />}>
        <BestSellerProductList />
      </Suspense>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          component={Link}
          href="/product"
          variant="outlined"
          color="primary"
          size="medium"
          sx={{ borderRadius: "9999px", px: 5, textTransform: "none" }}
        >
          View All Products
        </Button>
      </Box>
    </CommonContainer>
  );
}
