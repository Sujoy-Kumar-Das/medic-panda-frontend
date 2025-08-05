import CustomSwiper from "@/lib/sliders/CustomSwiper";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    feedback:
      "I've been using PharmaCare for all my family's medical needs for over a year now. The service is reliable, prices are competitive, and delivery is always on time. Highly recommended!",
  },
  {
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    feedback:
      "The pharmacist consultation service is amazing. They helped me choose the right medication and even suggested alternatives that were more affordable. Great customer service!",
  },
  {
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    feedback:
      "I love the convenience of ordering my prescriptions online. The mobile app makes reordering so easy, and I never have to worry about running out of my medications.",
  },
  {
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    feedback:
      "I love the convenience of ordering my prescriptions online. The mobile app makes reordering so easy, and I never have to worry about running out of my medications.",
  },
  {
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    feedback:
      "I love the convenience of ordering my prescriptions online. The mobile app makes reordering so easy, and I never have to worry about running out of my medications.",
  },
];

export default function TestimonialList() {
  // todo fetch testimonials data;
  return (
    <CustomSwiper>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </CustomSwiper>
  );
}
