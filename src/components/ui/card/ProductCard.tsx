import { IProduct } from "@/types/product.type";
import { FavoriteBorder, ShoppingCart, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { thumbnail, name, discountPercentage, price, discountPrice } = product;

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: 400, // Set a fixed height for uniform size
        boxShadow: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
        "&:hover .cardHover": {
          transform: "translateY(0)",
          opacity: 1,
        },
        "&:hover .hoverText": {
          opacity: 0,
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          borderRadius: "8px 8px 0 0",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={thumbnail}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          height={500}
          width={500}
          alt={name}
        />
      </Box>

      <Box
        sx={{
          textAlign: "center",
          p: 2,
          flexGrow: 0,
          transition: "opacity 0.3s ease",
        }}
        className="hoverText"
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
        >
          {name}
        </Typography>

        <Stack direction={"row"} gap={0.5} justifyContent={"center"}>
          <Typography
            variant="body1"
            sx={{
              color: discountPrice ? "text.secondary" : "text.primary",
              textDecoration: discountPrice ? "line-through" : "none",
            }}
          >
            ${price}
          </Typography>
          {discountPrice && (
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              ${discountPrice}
            </Typography>
          )}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rating value={4} readOnly />
        </Box>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="center"
        sx={{
          p: 2,
          flexGrow: 0,
          transform: "translateY(100%)",
          opacity: 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        className="cardHover"
      >
        <IconButton color="primary">
          <FavoriteBorder />
        </IconButton>
        <Button
          color="primary"
          endIcon={<ShoppingCart />}
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            borderRadius: 2,
            p: 1,
          }}
          size={"small"}
        >
          Add to cart
        </Button>
        <IconButton
          color="primary"
          component={Link}
          href={`/product/${product._id}`}
        >
          <Visibility />
        </IconButton>
      </Stack>

      {discountPercentage && (
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <Chip
            label="Discount"
            color="primary"
            size="small"
            sx={{ fontWeight: "bold", borderRadius: 1 }}
          />
          <Chip
            label={`${discountPercentage}% off`}
            color="secondary"
            size="small"
            sx={{ fontWeight: "bold", borderRadius: 1 }}
          />
        </Stack>
      )}
    </Box>
  );
};

export default ProductCard;
