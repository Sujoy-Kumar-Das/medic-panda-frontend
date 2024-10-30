import { IProduct } from "@/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
import AddToCartButton from "../buttons/AddToCartButton";
import WishListButton from "../buttons/WishListButton";

export default function SummerCard({ product }: { product: IProduct }) {
  return (
    <Box
      bgcolor={"background.paper"}
      p={2}
      borderRadius={"8px"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"space-between"}
      overflow={"hidden"}
      sx={{
        "&:hover .button": {
          transform: "translateY(0px)",
          opacity: 1,
        },
        "&:hover .button:nth-of-type(1)": {
          transitionDelay: "0ms",
        },
        "&:hover .button:nth-of-type(2)": {
          transitionDelay: "200ms",
        },
        "&:hover .button:nth-of-type(3)": {
          transitionDelay: "400ms",
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        overflow={"hidden"}
      >
        <Chip label="Sale" size="small" color="info" />
        <Chip label="Popular" size="small" color="success" />
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
        overflow={"hidden"}
      >
        <Image
          alt="summer collection image"
          src={product.thumbnail}
          height={140}
          width={140}
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      <Stack direction={"column"} spacing={1} overflow={"hidden"}>
        <Typography
          component={"h3"}
          color={"text.primary"}
          fontSize={18}
          mt={2}
        >
          {product.name}
        </Typography>
        <Box>
          <Typography
            fontWeight={400}
            variant="body1"
            component={"p"}
            color={"text.secondary"}
            sx={{
              textDecoration: `${
                product?.discount?.discountPrice ? "line-through" : "none"
              }`,
              display: "inline-block",
            }}
            marginRight={1}
          >
            {product.price}
          </Typography>
          <Typography
            fontWeight={400}
            variant="body1"
            component={"h1"}
            sx={{
              display: `${
                product?.discount?.discountPrice ? "inline-block" : "none"
              }`,
            }}
          >
            {product?.discount?.discountPrice}
          </Typography>
        </Box>
        <Rating readOnly value={4} />
      </Stack>

      <Stack
        direction={"column"}
        position={"absolute"}
        top={100}
        right={10}
        spacing={1}
        overflow={"hidden"}
      >
        <WishListButton id={product._id} btnType="Summer" />
        <AddToCartButton
          className="button"
          sx={{
            transform: "translateY(500px)",
            color: "primary.main",
            opacity: 0,
            transition:
              "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease",
          }}
          product={product}
        />
        <IconButton
          color="primary"
          size="small"
          className="button"
          component={Link}
          href={`/product/${product._id}`}
          sx={{
            transform: "translateY(500px)",
            opacity: 0,
            transition:
              "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease",
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
