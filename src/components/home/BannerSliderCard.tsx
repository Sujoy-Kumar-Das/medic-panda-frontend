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
            <Stack direction={"row"} spacing={3}>
              <AddToCartButton
                product={item}
                basic
                icon={false}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1)",
                  },
                }}
              />
              <Button component={Link} href={`/product/${item._id}`}>
                View Details
              </Button>
            </Stack>
          </Slide>
        </Box>

        {/* Image with Custom Animation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            opacity: isVisible ? 1 : 0, // Change opacity based on visibility
            transform: isVisible ? "scale(1)" : "scale(1.3)", // Scale effect based on visibility
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // Transition for opacity and scale
          }}
        >
          <Image
            src={item.thumbnail}
            width={500}
            height={500}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={`${item.thumbnail} image`}
          />
        </Box>
      </Box>
    </Container>
  );
}
