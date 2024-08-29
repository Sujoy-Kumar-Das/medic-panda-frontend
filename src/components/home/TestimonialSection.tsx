import bgImage from "@/assets/testimonial-bg.jpg";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <Box>
      <Container sx={{ py: 10 }} component={"div"}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          sx={{ height: "100%" }} // Ensure the Stack takes full height
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 0,
              minHeight: "300px", // Set a minimum height for consistency
              display: "flex", // Make Box a flex container
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="Testimonial background"
              src={bgImage}
              layout="responsive"
              width={700}
              height={500}
              style={{ borderRadius: "16px" }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 0,
              minHeight: "350px",
              p: 4,
              bgcolor: "background.default",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              color="primary.light"
              gutterBottom
            >
              Join our newsletter and get 30% discount for your next order.
            </Typography>

            <Stack direction={"row"} spacing={1} alignItems={"center"} mt={5}>
              <input
                name="email"
                type="email"
                placeholder="Your E-mail"
                style={{
                  padding: "12px",
                  borderRadius: "20px",
                  border: "none",
                  color: "#2D3748",
                  flex: 1,
                }}
              />
              <Button
                type="button"
                size="small"
                sx={{ borderRadius: "20px", py: 1, boxShadow: "none" }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
