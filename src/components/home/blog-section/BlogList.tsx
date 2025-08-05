import { Grid } from "@mui/material";
import BlogCard from "./BlogCard";

const articles = [
  {
    title: "10 Superfoods to Boost Your Immunity",
    description:
      "Discover the top foods that can help strengthen your immune system naturally.",
    category: "Nutrition",
    categoryColor: "primary.main",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Home Workouts for Busy People",
    description:
      "Effective exercises you can do at home with minimal equipment and time.",
    category: "Fitness",
    categoryColor: "info.main",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Managing Stress in Challenging Times",
    description:
      "Practical strategies to reduce stress and improve your mental wellbeing.",
    category: "Mental Health",
    categoryColor: "success.main",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];
export default function BlogList() {
  // todo fetch the blogs and show here
  return (
    <Grid container spacing={4}>
      {articles.map((article, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <BlogCard blog={article} />
        </Grid>
      ))}
    </Grid>
  );
}
