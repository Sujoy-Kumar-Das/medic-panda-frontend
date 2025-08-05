import { IProduct } from "@/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BestSellerCard({ product }: { product: IProduct }) {
  const rating = product.rating.average || Math.floor(Math.random() * 5) + 1;
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3, // Tailwind's rounded-2xl ≈ 1rem = 16px
        overflow: "hidden",
        bgcolor: "background.paper",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        position="relative"
        height={256} // h-64
        sx={{
          overflow: "hidden",
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          height={1000}
          width={1000}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover", // Tailwind used object-cover
            transition: "transform 0.3s ease",
          }}
          className="group-hover:scale-105"
        />
        {product?.discount && (
          <Chip
            label={`${product.discount.percentage} OFF`}
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              fontSize: "0.75rem",
              fontWeight: "bold",
              backgroundColor: "secondary.main",
              color: "#fff",
              px: 1.5,
              py: 0.5,
              borderRadius: "9999px", // rounded-full
            }}
          />
        )}
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight="600"
          color="text.primary"
          gutterBottom
          sx={{ mb: 1 }}
        >
          {product.name}
        </Typography>

        <Box display="flex" alignItems="center" mb={2}>
          <Rating readOnly value={rating} />
          <Typography variant="body2" color="text.secondary">
            ({rating})
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            {product?.discount?.discountPrice && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through", mr: 1 }}
              >
                ${product.discount.discountPrice}
              </Typography>
            )}
            <Typography
              variant="h6"
              color="primary"
              fontWeight="bold"
              component="span"
            >
              ${product.price}
            </Typography>
          </Box>

          <IconButton
            component={Link}
            href={`/product/${product._id}`}
            sx={{
              color: "primary.main",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "primary.dark",
              },
            }}
          >
            <VisibilityIcon fontSize="medium" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
