import CommonContainer from "@/components/shared/common-container/CommonContainer";
import CommonHeader from "@/components/shared/header/CommonHeader";
import TestimonialSkeleton from "@/components/skeleton/TestimonialSkeleton";
import { getAllReviewService } from "@/services/actions/review.service";
import { Suspense } from "react";
import TestimonialList from "./TestimonialList";

export default async function TestimonialsSection() {
  return (
    <CommonContainer sx={{ bgcolor: "background.paper" }}>
      <CommonHeader
        title="What Our Customers Say"
        subtitle="Trusted by thousands of happy customers across the country"
      />

      <Suspense fallback={<TestimonialSkeleton />}>
        <TestimonialList />
      </Suspense>
    </CommonContainer>
  );
}
