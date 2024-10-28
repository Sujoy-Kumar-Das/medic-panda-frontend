import { IProduct } from "@/types/product.type";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../buttons/AddToCartButton";
import WishListButton from "../buttons/WishListButton";

export default function SkinCareProductCard({
  product,
}: {
  product: IProduct;
}) {
  const { thumbnail, name, price, _id, discount } = product;

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: 3,
        borderRadius: 2,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        flexGrow: 1, // Allows the card to grow within the flex container
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
        "&:hover .show-buttons .button": {
          transform: "translateX(0)",
          opacity: 1,
        },
      }}
    >
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            height: 200,
            overflow: "hidden",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Image src={thumbnail} height={200} width={200} alt={name} />
        </Box>
        <Divider
          sx={{
            height: "2px",
            background:
              "linear-gradient(to right, rgba(128, 128, 128, 0.05), rgba(128, 128, 128, 1), rgba(128, 128, 128, 0.05))",
            border: "none",
          }}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 0, pt: 2 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1}
            sx={{ mt: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: discount?.discountPrice
                  ? "text.secondary"
                  : "text.primary",
                textDecoration: discount?.discountPrice
                  ? "line-through"
                  : "none",
              }}
            >
              ${price}
            </Typography>
            {discount?.discountStatus && (
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  textAlign: "center",
                }}
              >
                ${discount?.discountPrice}
              </Typography>
            )}
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={0.5}
            sx={{ mt: 1 }}
          >
            <StarIcon sx={{ fontSize: 18, color: "warning.main" }} />
            <Typography variant="body2" color="text.secondary">
              4.5
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      <Stack
        className="show-buttons"
        sx={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <WishListButton btnType="Discount" id={_id} />

        <AddToCartButton
          className="button"
          sx={{
            color: "primary.main",
            border: "1px solid #cccccc",
            height: "40px",
            width: "40px",
            padding: "10px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: "translateX(100%)",
            opacity: 0,
            transitionDelay: "0.2s",
            "&:hover": {
              color: "primary.main",
              borderColor: "primary.main",
              transform: "scale(1.1) translateX(0)",
            },
          }}
          product={product}
        />
        <IconButton
          className="button"
          sx={{
            color: "primary.main",
            border: "1px solid #cccccc",
            height: "40px",
            width: "40px",
            padding: "10px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: "translateX(100%)",
            opacity: 0,
            transitionDelay: "0.4s",
            "&:hover": {
              color: "primary.main",
              borderColor: "primary.main",
              transform: "scale(1.1) translateX(0)",
            },
          }}
          component={Link}
          href={`/product/${product._id}`}
        >
          <RemoveRedEyeIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
