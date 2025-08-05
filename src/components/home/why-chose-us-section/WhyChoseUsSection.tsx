import CommonContainer from "@/components/shared/common-container/CommonContainer";
import CommonHeader from "@/components/shared/header/CommonHeader";
import WhyChoseUsList from "./WhyChoseUsList";

export default function WhyChooseSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Why Choose PharmaCare"
        subtitle="We're committed to providing the best healthcare experience"
      />

      <WhyChoseUsList />
    </CommonContainer>
  );
}
