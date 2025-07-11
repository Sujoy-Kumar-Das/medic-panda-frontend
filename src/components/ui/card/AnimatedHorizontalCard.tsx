import {
  skinCareProductButtonContainerVariants,
  skinCareProductButtonVariants,
} from "@/lib/framer-motion/card-animation";
import { IProduct } from "@/types";
import { Box, Chip, Rating, Stack, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import Image from "next/image";
import AddToCartButton from "../buttons/AddToCartButton";
import ViewProductDetailsButton from "../buttons/ViewProductDetailsButton";
import WishListButton from "../buttons/WishListButton";

interface AnimatedHorizontalCardProps {
  product: IProduct;
}

export default function AnimatedHorizontalCard({
  product,
}: AnimatedHorizontalCardProps) {
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
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={2}
        borderColor={"background.default"}
        borderRadius={8}
        px={3}
        py={1}
      >
        <Stack direction={"column"} spacing={1}>
          {product.discount && (
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Chip label="Discount" size="small" color="primary" />
              <Chip
                label={`${product.discount?.percentage} off`}
                size="small"
                color="secondary"
              />
            </Stack>
          )}
          <Typography
            fontWeight={400}
            variant="h5"
            color={"text.primary"}
            component={"h1"}
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
              ${product.price}
            </Typography>
            {product?.discount?.discountPrice && (
              <Typography
                fontWeight={400}
                variant="body1"
                component={"h1"}
                color={"primary.main"}
                display={"inline-block"}
              >
                ${product.discount.discountPrice}
              </Typography>
            )}
          </Box>
          <Rating
            readOnly
            value={product.rating.average || Math.floor(Math.random() * 5) + 1}
          />
        </Stack>

        <Box sx={{ position: "relative", width: 180, height: 180 }}>
          <Image
            alt="product image"
            src={product.thumbnail}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "8px" }}
          />
          <motion.div
            variants={skinCareProductButtonContainerVariants}
            style={{
              position: "absolute",
              top: "10%",
              right: "0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <motion.div variants={skinCareProductButtonVariants}>
              <WishListButton
                id={product._id}
                isWishList={product.isWishList}
                sx={{
                  color: "primary.main",
                  border: "1px solid #cccccc",
                  height: "40px",
                  width: "40px",
                  padding: "10px",
                  "&:hover": {
                    color: "text.disabled",
                    borderColor: "primary.main",
                    bgcolor: "primary.main",
                  },
                }}
              />
            </motion.div>

            <motion.div variants={skinCareProductButtonVariants}>
              <AddToCartButton
                product={product}
                iconBtn
                sx={{
                  color: "primary.main",
                  border: "1px solid #cccccc",
                  "&:hover": {
                    color: "text.disabled",
                    borderColor: "primary.main",
                    bgcolor: "primary.main",
                  },
                }}
              />
            </motion.div>

            <motion.div variants={skinCareProductButtonVariants}>
              <ViewProductDetailsButton
                sx={{
                  color: "primary.main",
                  border: "1px solid #cccccc",
                  height: "40px",
                  width: "40px",
                  padding: "10px",
                  "&:hover": {
                    color: "text.disabled",
                    borderColor: "primary.main",
                    bgcolor: "primary.main",
                  },
                }}
                id={product._id}
              />
            </motion.div>
          </motion.div>
        </Box>
      </Stack>
    </motion.div>
  );
}
