import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useAddToCart from "@/hooks/useAddToCart";
import useRemoveFromWishList from "@/hooks/useRemoveFromWishList";
import { IProduct } from "@/types";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: IProduct;
}

export default function WishListCard({ product }: ProductCardProps) {
  const {
    handlerFunc,
    isLoading,
    data: cartData,
  } = useAddToCart(redirectAddToCart);

  const { handlerFunc: handleRemoveItem, isLoading: removeItemLoader } =
    useRemoveFromWishList();

  const router = useRouter();

  function redirectAddToCart() {
    router.push(`/dashboard/user/check-out/${cartData._id}`);
  }

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -5 }}
      sx={{
        borderRadius: 4,
        boxShadow: 4,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 8,
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 250,
          background: "background.default",
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          style={{
            objectFit: "fill",
            padding: 16,
          }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {product.discount?.discountPrice && (
          <Chip
            label={`${product.discount.percentage}% OFF`}
            color="error"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              fontWeight: "bold",
            }}
          />
        )}
      </Box>

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="text.primary"
          fontWeight="bold"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "3em", // Ensure consistent height for 2 lines
          }}
        >
          {product.name}
        </Typography>

        <Box mt="auto">
          {product.discount?.discountPrice ? (
            <Box>
              <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                <Typography variant="h6" color="success.main" fontWeight="bold">
                  ${Number(product?.discount?.discountPrice).toFixed(2)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="error.main"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <span>You save</span>
                <span>
                  ${(product.price - product.discount.discountPrice).toFixed(2)}
                </span>
              </Typography>
            </Box>
          ) : (
            <Typography variant="h6" color="text.primary" fontWeight="bold">
              ${Number(product?.price)?.toFixed(2)}
            </Typography>
          )}

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
            mt={3}
            sx={{
              "& .MuiButton-root": {
                flex: 1,
                whiteSpace: "nowrap",
                minWidth: 0,
                px: 1,
              },
            }}
          >
            <LoaderButton
              onClick={() => handlerFunc(product)}
              isLoading={isLoading}
              variant="contained"
              color="primary"
              sxProps={{
                fontWeight: "bold",
              }}
            >
              Buy Now
            </LoaderButton>

            <LoaderButton
              onClick={() => handleRemoveItem(product._id)}
              isLoading={removeItemLoader}
              variant="outlined"
              color="error"
              sxProps={{
                fontWeight: "bold",
              }}
            >
              Remove
            </LoaderButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
