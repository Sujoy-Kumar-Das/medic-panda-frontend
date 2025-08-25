import { ICategory } from "@/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <Paper
      elevation={6}
      sx={{
        height: 320,
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        "&:hover .category-card": {
          transform: "scale(1.1)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Image
        src={category.thumbnail}
        alt={category.name}
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        className="category-card"
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          p: 3,
          zIndex: 2,
        }}
      >
        <Typography variant="h5" color="primary.contrastText" mb={1}>
          {category.name}
        </Typography>
        <Typography variant="body2" color="primary.contrastText" mb={2}>
          {category.description}
        </Typography>
        <Button
          variant="contained"
          size="small"
          component={Link}
          href={`/product?category=${category._id}`}
          sx={{
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.light" },
            textTransform: "none",
            fontWeight: 500,
          }}
          endIcon={<ArrowForwardIcon />}
        >
          View Products
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 3,
          bgcolor: "primary.contrastText",
          borderRadius: "50%",
          p: 1.5,
          boxShadow: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={category.icon}
          alt={category.name}
          height={25}
          width={25}
          style={{
            objectFit: "cover",
            filter:
              "invert(48%) sepia(49%) saturate(1926%) hue-rotate(166deg) brightness(96%) contrast(87%)",
          }}
        />
      </Box>
    </Paper>
  );
}
