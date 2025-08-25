import CustomSwiper from "@/lib/sliders/CustomSwiper";
import { getAllReviewService } from "@/services/actions/review.service";
import TestimonialCard from "./TestimonialCard";
import { IReview } from "@/types";

export default async function TestimonialList() {
  const { data: testimonials } = await getAllReviewService();

  return (
    <CustomSwiper>
      {testimonials.map((testimonial: IReview) => (
        <TestimonialCard key={testimonial._id} testimonial={testimonial} />
      ))}
    </CustomSwiper>
  );
}
