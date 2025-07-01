import { Button, Paper, Typography } from "@mui/material";
export default function JoinUsSection() {
  return (
    <Paper
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        borderRadius: 3,
        p: 6,
        textAlign: "center",
        maxWidth: "lg",
        mx: "auto",
        my: 6,
      }}
    >
      <Typography variant="h4" component="h2" fontWeight="bold" mb={3}>
        Join Us in Making Healthcare Better
      </Typography>
      <Typography variant="h5" mb={4} sx={{ maxWidth: "xl", mx: "auto" }}>
        Whether you are looking for medicines, lab tests, or doctor
        consultations, we are here to help.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          px: 6,
          py: 1.5,
          fontWeight: "medium",
        }}
      >
        Contact Us
      </Button>
    </Paper>
  );
}
