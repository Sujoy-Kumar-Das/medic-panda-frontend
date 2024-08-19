import Container from "@mui/material/Container";
import CategorySlider from "./CategorySlider";

export default async function CategorySection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_base_url_local}/category`);
  const { data } = await res.json();

  return (
    <Container sx={{ py: 10 }}>
      <CategorySlider categories={data} />
    </Container>
  );
}
