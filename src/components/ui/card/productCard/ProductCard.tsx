import { IProduct } from "@/types/product.type";
import { IUserInfo } from "@/types/user.type";
import { Visibility } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../buttons/AddToCartButton";
import WishListButton from "../../buttons/WishListButton";

interface IProductCardProps {
  product: IProduct;
  user: IUserInfo;
}

const ProductCard = ({ product, user }: IProductCardProps) => {
  const { thumbnail, name, price, discount, _id } = product;

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: 400,
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
          alt={name}
          width={500}
          height={500}
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

        <Stack direction="row" gap={0.5} justifyContent="center">
          <Typography
            variant="body1"
            sx={{
              color: discount?.discountPrice
                ? "text.secondary"
                : "text.primary",
              textDecoration: discount?.discountPrice ? "line-through" : "none",
            }}
          >
            ${price}
          </Typography>
          {discount?.discountPrice && (
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              ${discount.discountPrice}
            </Typography>
          )}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
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
        <WishListButton id={_id} />
        <AddToCartButton
          sx={{ color: "text.disabled" }}
          basic
          product={product}
        />
        <IconButton
          color="primary"
          component={Link}
          href={`/product/${product._id}`}
          aria-label="view product"
        >
          <Visibility />
        </IconButton>
      </Stack>

      {discount?.discountStatus && (
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
            label={`${discount.percentage}% off`}
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
