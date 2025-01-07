import { title, titleChildren } from "@/animation/homeAnimation";
import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { IProduct } from "@/types";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function BannerSliderCard({
  item,
  index,
  sliderIndex,
}: {
  item: IProduct;
  index: number;
  sliderIndex: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    if (sliderIndex === index) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [sliderIndex, index, controls]);

  return (
    <Container sx={{ height: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: "center",
          overflow: "hidden",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Text Content with Sequential Animation */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", lg: "left" },
            mb: { xs: 3, lg: 0 },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
          component={motion.div}
          variants={title}
          initial="hidden"
          animate={controls}
        >
          <Typography
            variant="h3"
            component={motion.div}
            color="primary"
            fontWeight="bold"
            gutterBottom
            variants={titleChildren}
          >
            {item.name}
          </Typography>

          <Stack
            direction="row"
            gap={1}
            component={motion.div}
            variants={titleChildren}
          >
            <Typography
              sx={{
                color: item.discount?.discountPrice
                  ? "text.secondary"
                  : "text.primary",
                textDecoration: item.discount?.discountPrice
                  ? "line-through"
                  : "none",
                fontSize: 20,
              }}
            >
              ${item.price}
            </Typography>

            {/* Display discount price only if it's greater than 0 */}
            {Number(item?.discount?.discountPrice) > 0 && (
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                ${item?.discount?.discountPrice}
              </Typography>
            )}
          </Stack>

          <Stack
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            spacing={3}
            component={motion.div}
            variants={titleChildren}
          >
            <AddToCartButton
              product={item}
              basic
              icon={false}
              sx={{
                textTransform: "capitalize",
                px: 3,
                py: 1.5,
                fontWeight: "bold",
                color: "primary.contrastText",
                bgcolor: "primary.main",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  bgcolor: "primary.dark",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                },
              }}
            />

            <Button
              component={Link}
              href={`/product/${item._id}`}
              sx={{
                textTransform: "capitalize",
                px: 3,
                py: 1.5,
                fontWeight: "bold",
                color: "primary.contrastText",
                bgcolor: "primary.main",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  bgcolor: "primary.dark",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              View Details
            </Button>
          </Stack>
        </Box>

        {/* Image with Enhanced Animation */}
        <Box
          component={motion.div}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 1.3, rotate: 5 },
            visible: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: { xs: "100%", md: "50%" },
              maxWidth: 500,
              height: 500,
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={item.thumbnail}
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              alt={`${item.name} image`}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
