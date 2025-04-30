import { IProduct } from "@/types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import RemoveFromWIshListButton from "./RemoveFromWIshListButton";
import WishListBuyNowButton from "./WishListBuyNowButton";

interface ProductCardProps {
  product: IProduct;
}

export default function WishListCard({ product }: ProductCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 250,
          background: "linear-gradient(135deg, #f3f4f6, #e0e7ff)",
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          style={{ borderRadius: "12px 12px 0 0" }}
        />
      </Box>

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="text.primary"
          fontWeight="bold"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Typography>

        {product.discount?.discountStatus ? (
          <Box mb={2}>
            <Typography
              variant="body2"
              color="error.main"
              fontWeight="medium"
              sx={{
                backgroundColor: "#ffebee",
                padding: "2px 8px",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              {product.discount.percentage}% OFF
            </Typography>
            <Typography
              variant="h6"
              color="success.main"
              fontWeight="bold"
              mt={1}
            >
              ${Number(product?.discount?.discountPrice).toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through", opacity: 0.7 }}
            >
              Original: ${product.price.toFixed(2)}
            </Typography>
          </Box>
        ) : (
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight="bold"
            mb={2}
          >
            ${Number(product?.price)?.toFixed(2)}
          </Typography>
        )}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
          gap={3}
          mt={3}
        >
          <WishListBuyNowButton productData={product} />
          <RemoveFromWIshListButton id={product._id} />
        </Box>
      </CardContent>
    </Card>
  );
}
