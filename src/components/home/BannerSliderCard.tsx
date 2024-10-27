import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { IProduct } from "@/types";
import {
  Box,
  Button,
  Container,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BannerSliderCard({
  item,
  index,
  sliderIndex,
}: {
  item: IProduct;
  index: number;
  sliderIndex: number;
}) {
  const isVisible = sliderIndex === index;

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
          }}
        >
          <Slide
            in={isVisible}
            direction="up"
            timeout={{ enter: 600, exit: 600 }}
          >
            <Typography
              variant="h3"
              component="h1"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              {item.name}
            </Typography>
          </Slide>

          <Slide
            in={isVisible}
            direction="up"
            timeout={{ enter: 600, exit: 600 }}
            style={{ transitionDelay: "300ms" }}
          >
            <Typography
              variant="h5"
              color="text.primary"
              fontWeight="bold"
              mb={3}
            >
              ${item.discount?.discountPrice}
            </Typography>
          </Slide>

          <Slide
            in={isVisible}
            direction="up"
            timeout={{ enter: 600, exit: 600 }}
            style={{ transitionDelay: "400ms" }}
          >
            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              spacing={3}
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
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
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
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                View Details
              </Button>
            </Stack>
          </Slide>
        </Box>

        {/* Image with Fixed Size */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            maxWidth: 500,
            height: 500,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(1.3)",
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          }}
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
    </Container>
  );
}
