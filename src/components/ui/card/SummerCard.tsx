import { IProduct } from "@/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        mb={2}
        overflow={"hidden"}
      >
        <Chip label="Sale" size="small" color="info" />
        <Chip label="Popular" size="small" color="success" />
      </Stack>
      <Box
        sx={{ flex: 1, display: "flex", justifyContent: "center" }}
        overflow={"hidden"}
      >
        <Image
          alt="summer collection image"
          src={product.thumbnail}
          height={200}
          width={200}
        />
      </Box>
      <Stack
        direction={"column"}
        spacing={1}
        sx={{ flex: 1 }}
        overflow={"hidden"}
      >
        <Typography component={"h3"} variant="h6" color={"text.primary"}>
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
        <IconButton
          color="primary"
          size="small"
          className="button"
          sx={{
            transform: "translateY(500px)",
            opacity: 0,
            transition:
              "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease",
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="small"
          className="button"
          sx={{
            transform: "translateY(500px)",
            opacity: 0,
            transition:
              "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease",
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="small"
          className="button"
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
