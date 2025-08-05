import { ICategory } from "@/types";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <Link
      href={`/product?category=${category._id}`}
      style={{ textDecoration: "none" }}
    >
      <Paper
        elevation={2}
        component={"div"}
        sx={{
          padding: "24px",
          borderRadius: 4,
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 4,
          },
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            overflow: "hidden",
            mx: "auto",
            mb: 2,
            backgroundColor: "background.default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "grey.100",
            },
          }}
        >
          <Image
            src={category.thumbnail}
            alt={category.name}
            width={40}
            height={40}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {category.name}
        </Typography>
      </Paper>
    </Link>
  );
}
