"use client";
import {
  skinCareProductButtonContainerVariants,
  skinCareProductButtonVariants,
} from "@/lib/framer-motion/card-animation";
import { IProduct } from "@/types/product.type";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import * as motion from "motion/react-client";
import Image from "next/image";
import AddToCartButton from "../buttons/AddToCartButton";
import ViewProductDetailsButton from "../buttons/ViewProductDetailsButton";
import WishListButton from "../buttons/WishListButton";

export default function SimpleAnimatedCard({ product }: { product: IProduct }) {
  const { thumbnail, name, price, _id, discount } = product;
  console.log("Rendering skin care....");

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.02,
          transition: { type: "spring", stiffness: 200 },
        },
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: 3,
          borderRadius: 2,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          flexGrow: 1,
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

        <motion.div
          variants={skinCareProductButtonContainerVariants}
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <motion.div variants={skinCareProductButtonVariants}>
            <WishListButton id={_id} isWishList={product.isWishList} />
          </motion.div>

          <motion.div variants={skinCareProductButtonVariants}>
            <AddToCartButton
              product={product}
              iconBtn
              sx={{
                color: "primary.main",
              }}
            />
          </motion.div>

          <motion.div variants={skinCareProductButtonVariants}>
            <ViewProductDetailsButton
              sx={{ color: "primary.main" }}
              id={product._id}
            />
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
