import CommonContainer from "@/components/shared/common-container/CommonContainer";
import CommonHeader from "@/components/shared/header/CommonHeader";
import CategoryList from "./CategoryList";

export default async function CategorySection() {
  return (
    <CommonContainer sx={{ backgroundColor: "background.paper" }}>
      <CommonHeader
        title="Our Popular Categories"
        subtitle="Browse through our wide range of healthcare products and medicines"
      />

      <CategoryList />
    </CommonContainer>
  );
}
