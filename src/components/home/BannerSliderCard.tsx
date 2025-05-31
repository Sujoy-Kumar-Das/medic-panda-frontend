import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { title, titleChildren } from "@/lib/framer-motion/homeAnimation";
import { IProduct } from "@/types";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BannerSliderCard({
  item,
  isActive,
}: {
  item: IProduct;
  isActive: boolean;
}) {
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
          animate={isActive ? "visible" : "hidden"}
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
            direction={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "center", md: "flex-start" }}
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
                textAlign: { xs: "center", md: "start" },
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
                  textAlign: { xs: "center", md: "start" },
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
              Add To Cart
            </AddToCartButton>

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
          animate={isActive ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 1.1, rotate: 5 },
            visible: {
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              },
            },
          }}
          sx={{
            width: { xs: "100%", lg: "50%" },
            maxWidth: 600,
            height: { xs: 300, sm: 400, md: 500 },
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: { xs: 2, md: 4 },
              overflow: "hidden",
            }}
          >
            <Image
              src={item.thumbnail}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              alt={`${item.name} image`}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
