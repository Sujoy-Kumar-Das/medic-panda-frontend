"use client";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import {
  useGetAllWishListProductsQuery,
  useRemoveWishListProductMutation,
} from "@/redux/api/wish-listApi";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function WishListPage() {
  const { data, isLoading } = useGetAllWishListProductsQuery(undefined);

  const [removeFromWishList] = useRemoveWishListProductMutation();

  const handleRemoveFromWishList = async (id: string) => {
    const res = await removeFromWishList(id).unwrap();

    if (res._id) {
      toast.success("Product removed successfully.");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data?.data?.length) {
    return (
      <NoDataFound
        link="/product"
        text="Start Shopping"
        message="Your wishlist is empty. Add items to your wishlist and come back here to view them."
      />
    );
  }

  return (
    <Container>
      <Header
        title="Your Wishlist"
        subtitle="Save your favorite products and easily access them for future purchases."
      />

      <Grid container spacing={5}>
        {data?.data?.map(({ product }) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 250,
                  backgroundColor: "#f9f9f9",
                  borderRadius: "4px 4px 0 0",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: "4px 4px 0 0" }}
                />
              </Box>

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {product.name}
                </Typography>

                {product.discount?.discountStatus ? (
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {product.discount.percentage}% off
                    </Typography>
                    <Typography
                      variant="h6"
                      color="success.main"
                      fontWeight="bold"
                    >
                      ${product.discount.discountPrice.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: "line-through" }}
                    >
                      Original: ${product.price.toFixed(2)}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="h6"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                )}

                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ flex: 1, mr: 1 }}
                    component={Link}
                    href={`/dashboard/user/check-out/${product._id}`}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ flex: 1 }}
                    onClick={() => handleRemoveFromWishList(product._id)}
                  >
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
