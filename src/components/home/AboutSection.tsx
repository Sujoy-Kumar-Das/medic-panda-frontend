import image from "@/assets/buy_medicine.jpg";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
export default function AboutSection() {
  return (
    <Container component="section" sx={{ py: 10 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        <Box
          sx={{
            backgroundImage: `url(${image.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            width: { xs: "100%", md: "50%" },
            display: "flex",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-around" }}
            alignItems={"center"}
            gap={{ xs: 3, md: 0 }}
          >
            <Box
              sx={{
                width: { xs: "90%", md: "45%" },
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: 2,
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(229, 231, 235, 0.6)",
                boxSizing: "border-box",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                height: "auto",
                boxShadow: 2,
              }}
            >
              <Button
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  p: 2,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  color: "background.paper",
                }}
              >
                <EditNoteIcon />
              </Button>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 1, color: "text.disabled" }}
              >
                Refill Prescription
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.disabled" }}
              >
                Conveniently refill your prescriptions online, streamlining
                access to essential medications and ensuring you never miss a
                dose. Fast, easy, and secure.
              </Typography>
              <Typography
                fontWeight={"bold"}
                color="text.disabled"
                sx={{ textDecoration: "underline" }}
              >
                Refill Here
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: "90%", md: "45%" },
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: 2,
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(229, 231, 235, 0.6)",
                boxSizing: "border-box",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                height: "auto",
                boxShadow: 2,
              }}
            >
              <Button
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  p: 2,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  color: "background.paper",
                }}
              >
                <EditNoteIcon />
              </Button>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 1, color: "text.disabled" }}
              >
                Refill Prescription
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.disabled" }}
              >
                Conveniently refill your prescriptions online, streamlining
                access to essential medications and ensuring you never miss a
                dose. Fast, easy, and secure.
              </Typography>
              <Typography
                fontWeight={"bold"}
                color="text.disabled"
                sx={{ textDecoration: "underline" }}
              >
                Refill Here
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            bgcolor: "background.default",
            height: "80vh",
            width: { xs: "100%", md: "50%" },
            borderRadius: 2,
            p: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              fontWeight={"bold"}
              color="text.primary"
              component={"h3"}
              variant="h5"
            >
              Welcome to medic panda we offer the best practices.
            </Typography>
            <Typography
              fontWeight={500}
              color="text.secondary"
              component={"h3"}
              variant="body1"
              sx={{ my: 3 }}
            >
              welcome to medic Panda, where excellence meets care. We are
              dedicated to providing top-notch pharmaceutical services, ensuring
              the highest standards in medication management, and offering
              personalized advice. Trust us for reliable prescriptions, expert
              guidance, and a commitment to your health and well-being.{" "}
            </Typography>
            <Button>Learn More</Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
