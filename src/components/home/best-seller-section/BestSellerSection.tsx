import CardSkeleton from "@/components/skeleton/CardSkeleton";
import { Box, Button, Container } from "@mui/material";
import { Suspense } from "react";
import CommonHeader from "../../shared/header/CommonHeader";
import BestSellerList from "./BestSellerList";

export default function BestSellerSection() {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
      <Container maxWidth={false}>
        <CommonHeader
          title="Our Bestsellers"
          subtitle="Trusted by thousands of customers for their healthcare needs"
        />

        {/* Products Grid */}
        <Suspense fallback={<CardSkeleton />}>
          <BestSellerList />
        </Suspense>
        {/* View All Button */}
        <Box textAlign="center" mt={8}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderWidth: 2,
              px: 5,
              py: 1.5,
              borderRadius: 3,
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff",
                borderColor: "primary.main",
              },
            }}
            color="primary"
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
